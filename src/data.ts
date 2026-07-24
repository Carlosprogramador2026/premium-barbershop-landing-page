export const IMG = {
  hero: "https://images.pexels.com/photos/19664892/pexels-photo-19664892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  precision:
    "https://images.pexels.com/photos/18503604/pexels-photo-18503604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  beard:
    "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  shave:
    "https://images.pexels.com/photos/12302333/pexels-photo-12302333.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  razor:
    "https://images.pexels.com/photos/9315046/pexels-photo-9315046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  lounge:
    "https://images.pexels.com/photos/13138476/pexels-photo-13138476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lounge2:
    "https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  kids: "https://images.pexels.com/photos/19664875/pexels-photo-19664875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  pomade:
    "https://images.pexels.com/photos/9511913/pexels-photo-9511913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  oil: "https://images.pexels.com/photos/12558712/pexels-photo-12558712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  balm: "https://images.pexels.com/photos/15549644/pexels-photo-15549644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kit: "https://images.pexels.com/photos/4730934/pexels-photo-4730934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const NAV_LINKS = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Produtos", href: "#produtos" },
  { label: "O Ritual", href: "#ritual" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  { end: 9, suffix: "+", decimals: 0, label: "anos de ofício e navalha" },
  { end: 38, suffix: " mil", decimals: 0, label: "cortes realizados desde 2016" },
  { end: 15, suffix: "", decimals: 0, label: "especialistas premiados na casa" },
  { end: 4.9, suffix: "", decimals: 1, label: "nota média em 2.400+ avaliações" },
];

export const TICKER = [
  "Corte clássico",
  "Barba & navalha",
  "Toalha quente",
  "Sobrancelha",
  "Pigmentação",
  "Corte juvenil",
  "Dia do noivo",
  "Tratamento capilar",
];

export const PRODUCTS = [
  {
    id: "pomade",
    img: IMG.pomade,
    name: "Pomada Matte Hold Nº1",
    tag: "Fixação alta · sem brilho",
    desc: "Segura o penteado o dia inteiro sem pesar. Sai fácil no banho.",
    price: "R$ 59,90",
  },
  {
    id: "oil",
    img: IMG.oil,
    name: "Óleo de Barba Cedar Club",
    tag: "Cedro & vetiver · 30 ml",
    desc: "Amacia, alinha e perfuma. O favorito de quem leva a barba a sério.",
    price: "R$ 49,90",
  },
  {
    id: "balm",
    img: IMG.balm,
    name: "Balm Pós-Barba Cool Steel",
    tag: "Efeito calmante · sem álcool",
    desc: "Acalma a pele depois da navalha e evita irritação e pelos encravados.",
    price: "R$ 44,90",
  },
  {
    id: "kit",
    img: IMG.kit,
    name: "Kit Ritual em Casa",
    tag: "Pomada + óleo + balm",
    desc: "O trio completo para manter o padrão DeVCluB entre uma visita e outra.",
    price: "R$ 129,90",
  },
];

export const SERVICES = [
  { name: "Corte DeVCluB", desc: "Tesoura, máquina e acabamento na navalha", price: "R$ 49" },
  { name: "Corte + Barba", desc: "O combo que nunca falha", price: "R$ 79", hot: false },
  { name: "Barboterapia", desc: "Toalha quente, navalha e hidratação", price: "R$ 59" },
  { name: "Corte Juvenil", desc: "Dos 10 aos 15 anos, com paciência de sobra", price: "R$ 39" },
  { name: "Sobrancelha na navalha", desc: "Alinhamento natural, sem exageros", price: "R$ 25" },
  { name: "Pigmentação de barba", desc: "Disfarce dos fios brancos por até 3 semanas", price: "R$ 69" },
  { name: "Ritual DeVCluB Completo", desc: "Corte, barba, toalha quente e sobrancelha", price: "R$ 149", hot: true },
];

export const TESTIMONIALS = [
  {
    quote: "Saí de lá me sentindo outra pessoa. O ritual da toalha quente é outra categoria de atendimento.",
    name: "Rafael M.",
    age: "34 anos",
    tag: "Corte + Barba",
  },
  {
    quote: "Levei meu filho de 11 anos para o primeiro corte 'de gente grande'. Paciência e carinho nota mil.",
    name: "Camila R.",
    age: "mãe do Theo, 11",
    tag: "Corte Juvenil",
  },
  {
    quote: "Cabelo e barba impecáveis há seis anos. Já mudei de bairro e continuo atravessando a cidade.",
    name: "Seu Antônio",
    age: "58 anos",
    tag: "Clube DeVCluB",
  },
  {
    quote: "Agendei pelo WhatsApp, cheguei e fui atendido exatamente na hora marcada. Isso é raro hoje em dia.",
    name: "Diego F.",
    age: "27 anos",
    tag: "Corte DeVCluB",
  },
  {
    quote: "A pomada Hold Nº1 segurou meu penteado do estágio ao happy hour. Virei cliente da linha também.",
    name: "Lucas P.",
    age: "19 anos",
    tag: "DeVCluB Care",
  },
  {
    quote: "Ambiente premium, café bom, conversa boa — e ainda saí com o melhor corte do meu ano.",
    name: "Henrique S.",
    age: "42 anos",
    tag: "Ritual Completo",
  },
  {
    quote: "Fiz a barboterapia na véspera do meu casamento. Recomendo a todo noivo que quer chegar impecável.",
    name: "Felipe A.",
    age: "31 anos",
    tag: "Dia do Noivo",
  },
  {
    quote: "A pigmentação disfarçou os brancos da barba com naturalidade. Minha esposa aprovou o resultado.",
    name: "Jorge T.",
    age: "52 anos",
    tag: "Pigmentação",
  },
];

export const FAQS = [
  {
    q: "Preciso agendar ou posso chegar na hora?",
    a: "Os dois. Trabalhamos com hora marcada — que tem sempre prioridade — e com encaixe para quem chega sem agendar, conforme a disponibilidade do dia. Quem agenda pelo WhatsApp ou pelo formulário garante o horário e nunca espera.",
  },
  {
    q: "Vocês atendem crianças a partir de que idade?",
    a: "Atendemos a partir dos 10 anos, com especialistas acostumados ao público juvenil. O primeiro corte ganha brinde da linha DeVCluB Care, e o responsável pode acompanhar na cadeira ao lado o tempo todo.",
  },
  {
    q: "Como funciona a barboterapia com toalha quente?",
    a: "É o nosso ritual mais pedido: a barba é preparada com óleo, a toalha quente abre os poros e amacia os fios, e o barbeiro finaliza com navalha e balm. Além do acabamento perfeito, é um momento genuíno de relaxamento.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Pix, dinheiro e todas as bandeiras de crédito e débito. Os planos do Clube DeVCluB são cobrados por recorrência no cartão, sem ocupar limite, e podem ser cancelados a qualquer momento.",
  },
  {
    q: "Posso cancelar o Clube DeVCluB quando quiser?",
    a: "Sim. Não há fidelidade nem multa de cancelamento. Você pode pausar ou cancelar em um clique, direto pelo WhatsApp do clube, e continua com os benefícios proporcionais até o fim do ciclo pago.",
  },
  {
    q: "Tem estacionamento ou bicicletário?",
    a: "Temos convênio com o estacionamento ao lado (2 horas de cortesia para clientes) e bicicletário coberto na entrada. A unidade fica a 5 minutos a pé da estação Moema do metrô.",
  },
  {
    q: "Os produtos da linha DeVCluB Care são veganos?",
    a: "Sim. Toda a linha é vegana, livre de crueldade animal e dermatologicamente testada — inclusive os itens indicados para pele sensível e para o público juvenil.",
  },
];

export const WHATSAPP = "(11) 98811-2216";

export const HOURS = [
  { d: "Terça a sexta", h: "9h — 20h" },
  { d: "Sábado", h: "8h — 19h" },
  { d: "Domingo e segunda", h: "Fechado" },
];
