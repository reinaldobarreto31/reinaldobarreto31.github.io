import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, TerminalSquare } from "lucide-react";
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
          <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-2 mb-4">
            <Mail className="text-primary" />
            Contato
          </h2>
          <p className="text-muted-foreground">
            Interessado em discutir infraestrutura, Ruby on Rails ou oportunidades? Me envie uma mensagem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-6 font-mono text-sm">
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
              <h3 className="text-muted-foreground uppercase tracking-wider mb-2 text-xs">/local</h3>
              <p className="text-foreground" data-testid="text-contact-location">Navegantes/SC, Brasil</p>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
              <h3 className="text-muted-foreground uppercase tracking-wider mb-2 text-xs">/email</h3>
              <a href="mailto:reinaldobarretosilva@gmail.com" className="text-primary hover:underline break-all" data-testid="link-contact-email">
                reinaldobarretosilva@gmail.com
              </a>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
              <h3 className="text-muted-foreground uppercase tracking-wider mb-2 text-xs">/telefone</h3>
              <a href="tel:+5547988302308" className="text-primary hover:underline" data-testid="link-contact-phone">
                +55 47 98830-2308
              </a>
            </div>
          </div>

          <div className="md:col-span-2 bg-card border border-border rounded-lg p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
              <TerminalSquare size={16} className="text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground">enviar_mensagem.sh</span>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase">Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-background font-mono text-sm" data-testid="input-contact-name" />
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
                        <FormLabel className="font-mono text-xs uppercase">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} className="bg-background font-mono text-sm" data-testid="input-contact-email" />
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
                      <FormLabel className="font-mono text-xs uppercase">Assunto (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Assunto da mensagem" {...field} value={field.value || ''} className="bg-background font-mono text-sm" data-testid="input-contact-subject" />
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
                      <FormLabel className="font-mono text-xs uppercase">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como posso ajudar?" 
                          className="min-h-[120px] bg-background font-mono text-sm resize-y" 
                          {...field} 
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={submitMutation.isPending}
                  className="w-full font-mono uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-contact-submit"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
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
