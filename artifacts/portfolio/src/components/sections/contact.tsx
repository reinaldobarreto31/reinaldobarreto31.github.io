import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, TerminalSquare, Phone, MapPin, User, AtSign, MessageSquare, Tag } from "lucide-react";
import { SubmitContactBody } from "@workspace/api-zod";

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SubmitContactBody>>({
    resolver: zodResolver(SubmitContactBody),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useSubmitContact({
    mutation: {
      mutationKey: ["submitContact"],
    }
  });

  const onSubmit = (values: z.infer<typeof SubmitContactBody>) => {
    submitMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Mensagem enviada",
            description: "Sua mensagem foi entregue com sucesso. Responderei em breve.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Erro no envio",
            description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
            variant: "destructive",
          });
        }
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-3 mb-4">
            {/* 3D floating mail icon */}
            <span className="bg-primary/10 border border-primary/30 p-2 rounded-lg shadow-[0_0_20px_rgba(109,179,63,0.25)] inline-flex icon-card-3d">
              <Mail className="text-primary text-xl" />
            </span>
            Contato
          </h2>
          <p className="text-muted-foreground">
            Interessado em discutir{" "}
            <span className="boot-shine font-semibold font-mono">Java · Spring Boot · Kotlin</span>
            {" "}ou oportunidades? Me envie uma mensagem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* — Info cards — */}
          <div className="md:col-span-1 space-y-4 font-mono text-sm">

            <div className="contact-card-3d p-4 bg-card border border-border rounded-lg shadow-sm group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 border border-primary/20 p-1.5 rounded-md shadow-[0_0_10px_rgba(109,179,63,0.2)] group-hover:shadow-[0_0_16px_rgba(109,179,63,0.4)] transition-all">
                  <MapPin size={14} className="text-primary" />
                </span>
                <h3 className="text-muted-foreground uppercase tracking-wider text-xs">Localização</h3>
              </div>
              <p className="text-foreground pl-1" data-testid="text-contact-location">Navegantes/SC, Brasil</p>
            </div>

            <div className="contact-card-3d p-4 bg-card border border-border rounded-lg shadow-sm group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 border border-primary/20 p-1.5 rounded-md shadow-[0_0_10px_rgba(109,179,63,0.2)] group-hover:shadow-[0_0_16px_rgba(109,179,63,0.4)] transition-all">
                  <AtSign size={14} className="text-primary" />
                </span>
                <h3 className="text-muted-foreground uppercase tracking-wider text-xs">Email</h3>
              </div>
              <a
                href="mailto:reinaldobarretosilva@gmail.com"
                className="text-primary hover:underline break-all pl-1"
                data-testid="link-contact-email"
              >
                reinaldobarretosilva@gmail.com
              </a>
            </div>

            <div className="contact-card-3d p-4 bg-card border border-border rounded-lg shadow-sm group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 border border-primary/20 p-1.5 rounded-md shadow-[0_0_10px_rgba(109,179,63,0.2)] group-hover:shadow-[0_0_16px_rgba(109,179,63,0.4)] transition-all">
                  <Phone size={14} className="text-primary" />
                </span>
                <h3 className="text-muted-foreground uppercase tracking-wider text-xs">Telefone</h3>
              </div>
              <a
                href="tel:+5547988302308"
                className="text-primary hover:underline pl-1"
                data-testid="link-contact-phone"
              >
                +55 47 98830-2308
              </a>
            </div>
          </div>

          {/* — Form panel — */}
          <div className="md:col-span-2 bg-card border border-border rounded-lg p-6 shadow-xl relative overflow-hidden">
            {/* top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
              <TerminalSquare size={16} className="text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground">Enviar Mensagem</span>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase flex items-center gap-1.5">
                          <User size={11} className="text-primary" />
                          Nome
                        </FormLabel>
                        <FormControl>
                          <div className="input-glow rounded-md">
                            <Input
                              placeholder="Seu nome"
                              {...field}
                              className="bg-background font-mono text-sm focus:border-primary/50 transition-colors"
                              data-testid="input-contact-name"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase flex items-center gap-1.5">
                          <AtSign size={11} className="text-primary" />
                          Email
                        </FormLabel>
                        <FormControl>
                          <div className="input-glow rounded-md">
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              {...field}
                              className="bg-background font-mono text-sm focus:border-primary/50 transition-colors"
                              data-testid="input-contact-email"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase flex items-center gap-1.5">
                        <Tag size={11} className="text-primary" />
                        Assunto <span className="text-muted-foreground normal-case">(opcional)</span>
                      </FormLabel>
                      <FormControl>
                        <div className="input-glow rounded-md">
                          <Input
                            placeholder="Assunto da mensagem"
                            {...field}
                            value={field.value || ''}
                            className="bg-background font-mono text-sm focus:border-primary/50 transition-colors"
                            data-testid="input-contact-subject"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase flex items-center gap-1.5">
                        <MessageSquare size={11} className="text-primary" />
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <div className="input-glow rounded-md">
                          <Textarea
                            placeholder="Como posso ajudar?"
                            className="min-h-[120px] bg-background font-mono text-sm resize-y focus:border-primary/50 transition-colors"
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full font-mono uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(109,179,63,0.25)] hover:shadow-[0_0_30px_rgba(109,179,63,0.4)] transition-all"
                  data-testid="button-contact-submit"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      Executar
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
