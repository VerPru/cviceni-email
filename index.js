// Definujeme funkci goodbye s jedním parametrem jmeno
const goodbye1 = (jmeno) => {
    // Najdeme odstavec s třídou email__closing
    const closingParagraph = document.querySelector('.email__closing');
    
    // Pokud odstavec existuje, vložíme do něj zdvořilý pozdrav se jménem
    if (closingParagraph) {
      closingParagraph.innerHTML = `S pozdravem ${jmeno}`;
    }
  };
  
  // Zavoláme funkci goodbye s argumentem pro jméno pisatele
  goodbye('Pavel Ovesný');

  // Funkce fillSubject, která nastavuje předmět e-mailu
const fillSubject1 = (subject) => {
    const subjectElement = document.querySelector('.email__subject');
    if (subjectElement) {
      subjectElement.innerHTML = subject;
    }
  };

fillSubject('Pozvánka na schůzku');

// Funkce fillBody, která nastavuje tělo e-mailu a přidává pozdrav pomocí goodbye
const fillBody1 = (body, name) => {
    const bodyElement = document.querySelector('.email__body');
    if (bodyElement) {
      bodyElement.innerHTML = body;
    }
    goodbye(name); // Volání funkce goodbye pro nastavení pozdravu s jménem odesílatele
  };
  

  // Funkce goodbye pro nastavení pozdravu s jménem autora
const goodbye = (author) => {
    document.querySelector(".email__closing").innerHTML = `S pozdravem ${author}`;
};

// Funkce fillSubject pro nastavení předmětu e-mailu
const fillSubject = (subject) => {
    document.querySelector(".email__subject").textContent = subject;
};

// Funkce fillBody pro nastavení těla e-mailu a volání funkce goodbye
const fillBody = (body, name) => {
    document.querySelector(".email__body").innerHTML = body;
    goodbye(name); // Zavoláme goodbye pro nastavení pozdravu s jménem
};

// Volání funkcí s testovacími hodnotami
fillSubject("Nabídka na pozici senior frontend vývojáře");
fillBody(
    `<p>Vážený pane, vážená paní,</p>
    <p>
        reaguji na nabídku práce na pozici senior frontend vývojář, kterou vaše společnost inzerovala. 
        Jsem nadšený možností připojit se k vašemu týmu a přispět svými zkušenostmi a dovednostmi. 
        Věřím, že jsem ideální kandidát na tuto pozici a těším se na možnost spolupráce.
    </p>`, 
    "Pavel Ovesný"
);