#🌤️ Weather App - Previsão do Tempo

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Um aplicativo web simples, rápido e responsivo para consultar a previsão do tempo em tempo real de qualquer cidade do mundo. O projeto consome uma API externa de clima para fornecer dados meteorológicos precisos e atualizados dinamicamente na tela.

## 📌 Funcionalidades

- 🔍 Busca de previsão do tempo pelo nome da cidade.
- 🌡️ Exibição da temperatura atual, mínima e máxima (em °C).
- 💧 Informações detalhadas: umidade do ar, velocidade do vento e sensação térmica.
- 🖼️ Interface responsiva que se adapta perfeitamente a dispositivos móveis e desktops.
- ⚠️ Tratamento de erros amigável (ex: notificação caso a cidade não seja encontrada).
- ⛅ Ícones dinâmicos que mudam de acordo com o clima atual da cidade pesquisada.

## 💻 Demonstração

> **Nota:** Substitua o link abaixo por um print real do seu projeto.
> 
> ![Screenshot do Projeto](https://via.placeholder.com/800x400.png?text=Insira+um+Print+do+seu+App+Aqui)

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para estruturação semântica e acessível.
- **CSS3:** Para estilização, layout (Flexbox/Grid) e animações visuais fluidas.
- **JavaScript (ES6+):** Para lógica da aplicação, manipulação do DOM e requisições à API.
- **Fetch API:** Para realizar as requisições HTTP de forma moderna e assíncrona.
- **[OpenWeatherMap API](https://openweathermap.org/)**: Como fonte de dados em tempo real.

## 🛠️ Como executar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos
- Um navegador web moderno (Chrome, Firefox, Edge, Safari, etc).
- Um editor de código (recomendamos o [VS Code](https://code.visualstudio.com/)).
- Uma chave de API gratuita (API Key) do OpenWeatherMap.

### Passo a Passo

1. **Clone este repositório:**
   ```bash
   [git clone https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/thurzzinho/js-weather-api.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd js-weather-api
   ```

3. **Configure a sua Chave de API:**
   - Crie uma conta no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) e gere sua API Key.
   - Abra o arquivo `script.js` (ou onde estiver sua lógica de requisição).
   - Substitua a variável correspondente pela sua chave gerada:
     ```javascript
     const apiKey = "SUA_CHAVE_DE_API_AQUI";
     ```

4. **Abra o projeto:**
   - Dê um duplo clique no arquivo `index.html` para abrir diretamente no navegador.
   - **Dica:** Se estiver usando o VS Code, instale a extensão **Live Server** e inicie-a para que o navegador atualize automaticamente ao salvar os arquivos.

## 🤝 Como contribuir

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um *fork* do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`
3. Salve as suas alterações e crie uma mensagem de commit explicando o que você fez: `git commit -m "feat: adicionado nova funcionalidade X"`
4. Envie as suas alterações: `git push origin minha-feature`
5. Abra um *Pull Request* no repositório original.

## 📝 Licença

Este projeto está sob a licença MIT. Para mais detalhes, veja o arquivo [LICENSE](LICENSE).

---
Desenvolvido com ☕ e dedicação por [Arthur](https://www.linkedin.com/in/arthur-andrey/)
