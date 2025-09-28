import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const blogPosts = [
  {
    id: 1,
    title: "Тренды веб-дизайна 2024",
    description: "Разбираем самые актуальные тенденции в современном веб-дизайне и UX/UI",
    date: "15 сентября 2024",
    category: "Дизайн",
    readTime: "5 мин",
    image: "/img/e52a2d33-f5ec-49e5-af2e-2b8a386487a8.jpg"
  },
  {
    id: 2,
    title: "React vs Vue: что выбрать?",
    description: "Сравниваем популярные фреймворки и помогаем определиться с выбором",
    date: "12 сентября 2024", 
    category: "Разработка",
    readTime: "8 мин",
    image: "/img/e52a2d33-f5ec-49e5-af2e-2b8a386487a8.jpg"
  },
  {
    id: 3,
    title: "Искусство создания контента",
    description: "Секреты написания увлекательных статей и постов для социальных сетей",
    date: "10 сентября 2024",
    category: "Маркетинг", 
    readTime: "6 мин",
    image: "/img/e52a2d33-f5ec-49e5-af2e-2b8a386487a8.jpg"
  }
]

const socialLinks = [
  { name: 'Telegram', icon: 'Send', url: '#' },
  { name: 'Twitter', icon: 'Twitter', url: '#' },
  { name: 'Instagram', icon: 'Instagram', url: '#' },
  { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
]

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const renderHeader = () => (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="PenTool" size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ModernBlog
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`transition-colors ${activeSection === 'home' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('articles')}
              className={`transition-colors ${activeSection === 'articles' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              Статьи
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`transition-colors ${activeSection === 'about' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              О блоге
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-600 hover:text-primary transition-colors"
                title={social.name}
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )

  const renderHero = () => (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            ✨ Новые статьи каждую неделю
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Современный блог<br />
            о технологиях
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Актуальные статьи о веб-разработке, дизайне, маркетинге и трендах digital-мира
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => setActiveSection('articles')}
            >
              Читать статьи
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => setActiveSection('about')}
            >
              О проекте
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  const renderArticles = () => (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние статьи</h2>
          <p className="text-gray-600 text-lg">Новые идеи и полезные материалы</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <div className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Icon name="Share2" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderAbout = () => (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">О нашем блоге</h2>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            ModernBlog — это пространство для обмена знаниями и идеями в мире современных технологий. 
            Мы создаем контент для разработчиков, дизайнеров и всех, кто интересуется digital-сферой.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Качественный контент</h3>
              <p className="text-gray-600">Глубокие статьи от экспертов индустрии</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Активное сообщество</h3>
              <p className="text-gray-600">Обсуждения и обмен опытом</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Актуальные тренды</h3>
              <p className="text-gray-600">Следим за новинками и трендами</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border">
          <h3 className="text-2xl font-semibold mb-6">Присоединяйтесь к нам</h3>
          <p className="text-gray-600 mb-6">
            Подписывайтесь на наши социальные сети и будьте в курсе всех новостей
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:scale-110 transition-transform duration-200"
                title={social.name}
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  const renderFooter = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="PenTool" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">ModernBlog</span>
            </div>
            <p className="text-gray-400">
              Современный блог о технологиях, дизайне и digital-трендах
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Статьи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">О блоге</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Разработка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ModernBlog. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-white">
      {renderHeader()}
      
      {activeSection === 'home' && (
        <>
          {renderHero()}
          {renderArticles()}
        </>
      )}
      
      {activeSection === 'articles' && renderArticles()}
      {activeSection === 'about' && renderAbout()}
      
      {renderFooter()}
    </div>
  )
}

export default Index;