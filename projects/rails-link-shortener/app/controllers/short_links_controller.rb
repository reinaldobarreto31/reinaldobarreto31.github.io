class ShortLinksController < ApplicationController
  def index
    @short_links = ShortLink.order(created_at: :desc)
    @short_link  = ShortLink.new

    respond_to do |format|
      format.html
      format.json { render json: @short_links.map { |l| link_json(l) } }
    end
  end

  def create
    @short_link = ShortLink.new(short_link_params)

    respond_to do |format|
      if @short_link.save
        format.html { redirect_to root_path, notice: "Link encurtado com sucesso!" }
        format.json { render json: link_json(@short_link), status: :created }
      else
        @short_links = ShortLink.order(created_at: :desc)
        format.html { render :index, status: :unprocessable_entity }
        format.json { render json: { errors: @short_link.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  def redirect
    @link = ShortLink.find_by!(code: params[:code])
    @link.increment_clicks!
    redirect_to @link.original_url, allow_other_host: true
  rescue ActiveRecord::RecordNotFound
    respond_to do |format|
      format.html { redirect_to root_path, alert: "Link não encontrado." }
      format.json { render json: { error: "Link não encontrado" }, status: :not_found }
    end
  end

  def destroy
    link = ShortLink.find(params[:id])
    link.destroy

    respond_to do |format|
      format.html { redirect_to root_path, notice: "Link removido." }
      format.json { head :no_content }
    end
  end

  private

  def short_link_params
    params.require(:short_link).permit(:original_url, :title)
  end

  def link_json(link)
    {
      id:           link.id,
      original_url: link.original_url,
      title:        link.title,
      code:         link.code,
      click_count:  link.clicks || 0,
      short_url:    "#{request.base_url}/go/#{link.code}",
      created_at:   link.created_at.iso8601
    }
  end
end
