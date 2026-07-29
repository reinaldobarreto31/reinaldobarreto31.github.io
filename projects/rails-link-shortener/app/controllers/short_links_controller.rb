class ShortLinksController < ApplicationController
  def index
    @short_links = ShortLink.order(created_at: :desc)
    @short_link  = ShortLink.new
  end

  def create
    @short_link = ShortLink.new(short_link_params)

    if @short_link.save
      redirect_to root_path, notice: "Link encurtado com sucesso!"
    else
      @short_links = ShortLink.order(created_at: :desc)
      render :index, status: :unprocessable_entity
    end
  end

  def redirect
    @link = ShortLink.find_by!(code: params[:code])
    @link.increment_clicks!
    redirect_to @link.original_url, allow_other_host: true
  rescue ActiveRecord::RecordNotFound
    redirect_to root_path, alert: "Link não encontrado."
  end

  def destroy
    ShortLink.find(params[:id]).destroy
    redirect_to root_path, notice: "Link removido."
  end

  private

  def short_link_params
    params.require(:short_link).permit(:original_url, :title)
  end
end
