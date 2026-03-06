# 🎨 Guia Simplificado - Portfolio Angular

## 🎯 DESIGN MINIMALISTA PARA PORT ANGULAR

Este design foi simplificado para facilitar o port para Angular. Sem animações complexas, apenas CSS básico.

## 📐 ESTRUTURA VISUAL SIMPLES

### Layout Geral

- Header (fixo no topo, 70px altura)
- Hero (tela cheia, grid 2 colunas)
- About (fundo alternado, 3 cards)
- Projects (grid 3 colunas, cards com hover)
- Skills (3 colunas, barras de progresso)
- Contact (2 colunas: info + form)
- Footer (simples, 1 linha)

## 🎨 PALETA DE CORES

```css
/* Cores principais */
--light-green: #94e26f;
--graphite: #363537;
--fern: #4f772d;
--light-gray: #f5f5f5;
--pale-slate: #b3b5bb;

/* Modo Escuro (padrão) */
background: #363537;
text: white;
cards: rgba(255,255,255,0.05);
borders: rgba(255,255,255,0.1);

/* Modo Claro */
background: white;
text: #363537;
cards: white;
borders: #e0e0e0;
section-alternada: #f5f5f5;
```

## 📦 COMPONENTES SIMPLES

### 1. HEADER (fixo)

Altura: 70px  
Background: transparente (scrolled: blur + opacity)  
Max-width: 1200px  
Padding: 0 20px

Elementos:
- Logo "Portfolio" (esquerda) - cor: #94e26f
- Links (centro): Sobre, Projetos, Habilidades
- Botão Theme (ícone sol/lua) - circular 40px
- Botão "Contato" - bg: #94e26f, cor: #363537

### 2. HERO

Min-height: 100vh  
Grid: 2 colunas (50/50)  
Gap: 60px  
Padding-top: 70px

Coluna 1 (texto):
- Título: 48px, bold
- Nome destacado: color #94e26f
- Subtítulo: 24px, color #94e26f
- Descrição: 18px, color #b3b5bb
- 2 botões: "Ver Projetos" (bg green) e "Contato" (outline)
- 3 ícones sociais: circular 45px

Coluna 2 (imagem):
- Imagem: 500px altura, border-radius 16px
- Border: 2px solid #94e26f

### 3. ABOUT

Padding: 80px 20px  
Background: alternado (escuro: rgba(255,255,255,0.03) / claro: #f5f5f5)

Título centralizado:
- Texto: 40px, bold
- Linha verde: 80px x 4px, margin-bottom 30px
- Descrição: 18px, color #b3b5bb

Grid 3 colunas (cards):
- Background: semi-transparente
- Border: 1px
- Border-radius: 12px
- Padding: 40px 30px

Cada card:
- Ícone circular: 70px, bg rgba(148,226,111,0.2)
- Título: 22px, bold
- Descrição: 16px, color #b3b5bb

Box destaque (fundo):
- Background: #94e26f
- Border-radius: 16px
- Padding: 50px
- Grid 2 colunas
- Estatísticas: 3 números grandes (5+, 50+, 30+)

### 4. PROJECTS

Padding: 80px 20px  
Grid 3 colunas

Cada card:
- Background: semi-transparente
- Border-radius: 12px
- Overflow: hidden

Imagem:
- Height: 200px
- Overlay no hover com 2 botões circulares (GitHub + Link)
- Overlay: background rgba(0,0,0,0.7)

Conteúdo:
- Padding: 25px
- Título: 22px, bold
- Descrição: 15px
- Tags: pills com bg rgba(148,226,111,0.2)

Botão "Ver Mais": outline, center

### 5. SKILLS

Padding: 80px 20px  
Background: alternado  
Grid 3 colunas

Cada card:
- Padding: 35px 30px
- Border-radius: 12px
- Título centralizado: 22px

Progress bars:
- Nome + porcentagem (flex justify-between)
- Barra: height 8px, border-radius 10px
- Preenchimento: width dinâmica, bg #94e26f

Tecnologias extras (abaixo):
- Pills simples: padding 10px 20px, border-radius 25px

### 6. CONTACT

Padding: 80px 20px  
Grid 2 colunas

Coluna 1 (info):
- Título: 28px, bold
- 3 itens de contato: ícone circular + texto
- Box destaque: bg #94e26f, padding 25px

Coluna 2 (form):
- Background: semi-transparente
- Padding: 40px
- Border-radius: 12px

Inputs:
- Width: 100%
- Padding: 12px 16px
- Border-radius: 8px
- Border: 1px

Textarea: 6 rows

Botão submit:
- Background: #94e26f
- Padding: 14px 30px
- Ícone + texto

### 7. FOOTER

Padding: 30px 20px  
Border-top: 1px  
Flex: space-between

Texto: 15px, color #b3b5bb  
Coração: #94e26f (preenchido)

## 🔄 TOGGLE TEMA

### Estado

```ts
isDark: boolean = true; // padrão escuro

toggleTheme() {
	this.isDark = !this.isDark;
	localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
}
```

### CSS Condicional

```ts
// Modo Escuro
backgroundColor: isDark ? '#363537' : 'white'
color: isDark ? 'white' : '#363537'
cardBg: isDark ? 'rgba(255,255,255,0.05)' : 'white'
border: isDark ? 'rgba(255,255,255,0.1)' : '#e0e0e0'

// Seções alternadas
sectionBg: isDark ? 'rgba(255,255,255,0.03)' : '#f5f5f5'
```

## 📏 MEDIDAS PRINCIPAIS

Max-width container: 1200px  
Padding lateral: 20px  
Section padding: 80px 20px

Espaçamentos:
- Gap grid: 30px ou 60px
- Margin bottom título: 60px
- Card padding: 30-40px
- Button padding: 12-14px vertical, 24-30px horizontal

Border-radius:
- Cards: 12px
- Botões: 8px
- Imagens: 16px
- Pills/Tags: 20-25px
- Círculos: 50%

Tamanhos:
- H1: 48px
- H2: 40px
- H3: 28px, 22px
- Body: 16-18px
- Small: 14-15px

## 🎯 ANGULAR - EXEMPLO BÁSICO

### Component HTML

```html
<section 
	[style.background-color]="isDark ? '#363537' : 'white'"
	[style.padding]="'80px 20px'">
  
	<div style="max-width: 1200px; margin: 0 auto;">
		<h2 [style.color]="isDark ? 'white' : '#363537'">
			Título
		</h2>
	</div>
</section>
```

### Component TS

```ts
export class AboutComponent {
	@Input() isDark: boolean = true;
}
```

### Service (Theme)

```ts
@Injectable({ providedIn: 'root' })
export class ThemeService {
	private isDarkSubject = new BehaviorSubject<boolean>(true);
	isDark$ = this.isDarkSubject.asObservable();

	toggleTheme() {
		const newValue = !this.isDarkSubject.value;
		this.isDarkSubject.next(newValue);
		localStorage.setItem('theme', newValue ? 'dark' : 'light');
	}
}
```

## ✅ CHECKLIST PARA PORT

- Criar variáveis CSS para cores
- Estruturar componentes (7 componentes)
- Criar ThemeService com BehaviorSubject
- Implementar toggle no Header
- Passar isDark para todos componentes
- Aplicar estilos condicionais [style.xxx]
- Adicionar ícones (instalar lucide-angular ou similar)
- Testar alternância de tema
- Salvar preferência no localStorage
- Ajustar responsividade (opcional)

## 🚀 SIMPLIFICAÇÕES FEITAS

✅ Removido: Framer Motion, animações complexas  
✅ Removido: Gradientes elaborados  
✅ Removido: Tailwind classes  
✅ Substituído: Inline styles simples  
✅ Foco: CSS básico, fácil de portar

Tudo usa inline styles ou style binding do Angular, super fácil de copiar!
