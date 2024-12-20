document.addEventListener("DOMContentLoaded", () => {
  const paymentButtons = document.querySelectorAll(".payment-options button");
  const paymentDetails = document.getElementById("payment-details");

  paymentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover a classe "selected" de todos os botões
      paymentButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      // Mostrar opções específicas para PIX
      if (button.id === "pix") {
        paymentDetails.innerHTML = `
                  <div id="pix-options">
                      <button id="copy-link">Copiar Link</button>
                      <div id="pix-qr"></div>
                  </div>
              `;

        // Criar QR Code
        const pixCode =
          "00020126470014BR.GOV.BCB.PIX0125felipergraciola@gmail.com5204000053039865802BR5925Luis Felipe da Rosa Graci6009SAO PAULO621405104LJLAkjBuE630432D4"; // Substitua por dados reais
        const qrContainer = document.getElementById("pix-qr");
        const qrcode = new QRCode(qrContainer, {
          text: pixCode,
          width: 150,
          height: 150,
        });

        // Evento para o botão "Copiar Link"
        document.getElementById("copy-link").addEventListener("click", () => {
          navigator.clipboard.writeText(pixCode);
          alert("Link PIX copiado!");
        });
      } else {
        // Formulário padrão para Crédito/Débito
        paymentDetails.innerHTML = `
                  <form>
                      <input type="text" placeholder="Número do Cartão">
                      <input type="text" placeholder="Nome no Cartão">
                      <input type="text" placeholder="Data de Vencimento (MM/AA)">
                      <input type="text" placeholder="CVV">
                  </form>
              `;
      }
    });
  });
});

const hamburger = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");
const userAvatar = document.getElementById("user-avatar");

// Função para abrir/fechar o menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("active");
});

// Função para exibir a foto do usuário
if (localStorage.getItem("userAvatar")) {
  userAvatar.style.backgroundImage = `url(${localStorage.getItem(
    "userAvatar"
  )})`;
}
