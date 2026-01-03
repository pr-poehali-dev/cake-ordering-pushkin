import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Детские праздники", icon: "Baby", color: "bg-[#FF6B9D]" },
    { name: "Свадьбы", icon: "Heart", color: "bg-[#9b87f5]" },
    { name: "Корпоративы", icon: "Briefcase", color: "bg-[#FEC6A1]" },
    { name: "Дни рождения", icon: "Cake", color: "bg-[#D3E4FD]" },
  ];

  const testimonials = [
    {
      name: "Анна М.",
      text: "Заказывала торт на день рождения дочери. Ребята сделали просто шедевр! Все гости были в восторге, а дочка не могла оторвать глаз от своего торта с единорогом.",
      rating: 5,
    },
    {
      name: "Дмитрий К.",
      text: "Спасибо за потрясающий свадебный торт! Не только красивый, но и очень вкусный. Натуральные ингредиенты чувствуются в каждом кусочке.",
      rating: 5,
    },
    {
      name: "Елена С.",
      text: "Заказываем торты для корпоративных мероприятий уже третий раз. Всегда качественно, вовремя и очень вкусно!",
      rating: 5,
    },
  ];

  const portfolioImages = [
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/20b4b16f-62a4-4804-9f9f-6d41ddd7b8f4.jpg",
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/69af7edd-eeda-4eb3-8868-36bc82fa5f14.jpg",
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/6af73808-66b6-40d1-9f7b-0970006a51b2.jpg",
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/20b4b16f-62a4-4804-9f9f-6d41ddd7b8f4.jpg",
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/69af7edd-eeda-4eb3-8868-36bc82fa5f14.jpg",
    "https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/6af73808-66b6-40d1-9f7b-0970006a51b2.jpg",
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cake" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">СладкоеЧудо</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>Заказать торт</Button>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-[#FEC6A1]/30 via-[#D3E4FD]/30 to-[#FF6B9D]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Торты на заказ в <span className="text-primary">Пушкине</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Создаём праздничные торты из натуральных ингредиентов для любого события. 
                Каждый торт — произведение искусства, которое радует не только глаз, но и вкус!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Image" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Натуральные продукты</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">24ч</div>
                  <div className="text-sm text-muted-foreground mt-1">Минимальный срок</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/20b4b16f-62a4-4804-9f9f-6d41ddd7b8f4.jpg" 
                  alt="Праздничный торт" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={32} className="text-yellow-400 fill-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог тортов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаём торты для любых праздников и событий
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Card 
                key={idx} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`${category.color} p-8 flex items-center justify-center`}>
                    <Icon name={category.icon} size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-center">{category.name}</h3>
                    <p className="text-center text-muted-foreground mt-2">
                      Уникальные дизайны для вашего праздника
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-gradient-to-br from-[#D3E4FD]/20 to-[#FEC6A1]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Галерея тортов, которые мы создали с любовью для наших клиентов
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Торт ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/d44cdbe5-c359-44b1-af8e-7cbb243e303e/files/69af7edd-eeda-4eb3-8868-36bc82fa5f14.jpg" 
                alt="Наша команда" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашей пекарне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда профессиональных кондитеров с многолетним опытом. Наша миссия — создавать торты, 
                которые делают ваши праздники незабываемыми.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Leaf" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">100% натуральные ингредиенты</h3>
                    <p className="text-muted-foreground">
                      Используем только качественные продукты без искусственных добавок
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Sparkles" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Уникальный дизайн</h3>
                    <p className="text-muted-foreground">
                      Каждый торт создаётся по индивидуальному эскизу
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/50 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Быстрая доставка</h3>
                    <p className="text-muted-foreground">
                      Доставим ваш торт в Пушкине в удобное для вас время
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-gradient-to-br from-[#FF6B9D]/10 to-[#9b87f5]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют сотни довольных клиентов в Пушкине
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="font-bold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы воплотить вашу мечту о perfect торте в реальность
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Пушкин, ул. Садовая, 25</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/50 p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@sladkoechudo.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата мероприятия</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Комментарий</label>
                      <Textarea placeholder="Расскажите о вашем празднике и пожеланиях к торту" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-[#FF6B9D] via-[#9b87f5] to-[#FEC6A1] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Cake" size={32} />
            <span className="text-2xl font-bold">СладкоеЧудо</span>
          </div>
          <p className="text-white/90 mb-4">
            Торты на заказ в Пушкине из натуральных ингредиентов
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/80">
            © 2024 СладкоеЧудо. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;