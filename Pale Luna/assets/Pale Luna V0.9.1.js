const prompt = require('prompt-sync')();

let temChave = false; // Controle de posse da chave
let jogoAtivo = true; // Flag para continuar o jogo
let jogoAtivo1 = true;
let iniciofalha = false;
let papega = false;
let tentanovamente = true;
let floresta1 = ("");
let atalho = false;
let gameover = false;
let saiudafloresta = false;
let floresta2 = ("");
let jogoAtivo2 = true
let cabana = ("");
let mapaachado = false;
let tentanovamente1 = true;
let cabana1 = ("");
let cabana2 = ("");
let saiudacasa = false;
let saiudafloresta1 = false;
let floresta3 = ("");
let jogoAtivo3 = true
let mapa = ("");
let objeto = ("");
let foto = ("");
let decisão1 = ("");
let decisão2 = ("");
let barco = ("");
let ponte = ("");
let tentanovamente2 = true;
let jogoAtivo4 = true;
let floresta4 = ("");
let BAD_ENDING = false;
let GOOD_ENDING = false;
let REAL_ENDING = false;
let fotopega = false
let leufoto = false
let casafora =false

//Respostas para o TRUE ENDING:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 1 (Ler o que está escrito);
// 2 (SUL)
// 1 (ENTRAR NA CASA)
// 1 (SEGUIR MAPA)
// 1 (ESCAVAR)
// FIM

//Respostas para o GOOD ENDING :;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 1 (Ler o que está escrito);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

//Respostas para o BAD ENDING:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 1 (NORTE) %50 DE CHANCE DE SUCESSO
// 1 (Atalho)

//Respostas para o BAD ENDING 2:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 2 (Não ler o que está escrito);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

//Respostas para o BAD ENDING 3:
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 2 (Ignorar o objeto);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

console.log (" ");
console.log (" ");
console.log (" ");
console.log ("██████╗  █████╗ ██╗     ███████╗     ██╗     ██╗   ██╗███╗   ██╗ █████╗ ");
console.log ("██╔══██╗██╔══██╗██║     ██╔════╝     ██║     ██║   ██║████╗  ██║██╔══██╗");
console.log ("██████╔╝███████║██║     █████╗       ██║     ██║   ██║██╔██╗ ██║███████║");
console.log ("██╔═══╝ ██╔══██║██║     ██╔══╝       ██║     ██║   ██║██║╚██╗██║██╔══██║");
console.log ("██║     ██║  ██║███████╗███████╗     ███████╗╚██████╔╝██║ ╚████║██║  ██║");
console.log ("╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝");
console.log ("---------------------------------------------------------------");
console.log ("Bem-vindo a Pale Luna! Siga as regras para garantir a experiência completa.");
console.log ("Regra 1: Digite apenas números (1, 2, 3 e 4).");
console.log ("Regra 2: Não utilize caracteres especiais.");
console.log ("Regra 3: Divirta-se 😉");
console.log ("---------------------------------------------------------------");
console.log ("-> Podemos começar?");
console.log ("---------------------------------------------------------------");
console.log ("Opções:");
console.log ("1: Sim");
console.log ("2: Nao");
console.log ("---------------------------------------------------------------");
console.log ("Comando?");
let começar = prompt("> ");


if (começar === "2") {
    console.log (" ");
    console.log("---------------------------------------------------------------");
    console.log("-> Que pena, vejo você na próxima!");
    console.log("---------------------------------------------------------------");
    process.exit(0); // Encerra o programa com código de saída 0 (sucesso)
} else if (começar !== "1") {
    console.log (" ");
    console.log("---------------------------------------------------------------");
    console.log('-> Opção invalida');
    console.log("---------------------------------------------------------------");
    process.exit(1); // Encerra o programa com código de saída 1 (falha)
}
console.clear();

while (jogoAtivo) {
console.log("██████████████████████████████████████████████████████████████████████████████████")
console.log("██                                                                              ██")
console.log("██                         █                                                    ██")
console.log("██            █            █                                                    ██")
console.log("██           ███          ███                                                   ██")
console.log("██          (Pote)       (Pá)                                                   ██")                                                                               
console.log("██                                                                              ██")                                                                              
console.log("██                                                                              ██")                                                                              
console.log("██                                                                              ██")                                                                               
console.log("██                                                                           █████")                                                                               
console.log("██                                   O                                       █   █")                                                                               
console.log("██                                  /|\\                            (Porta)   █   █")                                                                               
console.log("██                                  / \\                                      █   █")                                                                               
console.log("██                                                                           █████")                                                                               
console.log("██                                                                              ██")                                                                               
console.log("██                                                                              ██")                                                                               
console.log("██                                                                              ██")
console.log("██████████████████████████████████████████████████████████████████████████████████")
console.log (" ")
console.log ("---------------------------------------------------------------");
console.log ("-> Você está em uma sala escura. A luz da lua raia pela janela.");
console.log ("-> Há um POTE DE OURO no canto da sala, junto com uma PÁ. E do outro lado existe uma PORTA.");
console.log ("---------------------------------------------------------------");
console.log ("Opções:");
console.log ("1. PÁ");
console.log ("2. POTE DE OURO");
console.log ("3. PORTA");
console.log ("---------------------------------------------------------------");
    console.log ("Comando?");
    let inicio = Number(prompt("> "));
if (inicio === 1) {
    if (papega) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Você já pegou a pá");
    } else if (!papega) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Você pegou a pá, talvez seja util no futuro");
    console.log ("-> O que você vai fazer agora?");
    papega = true;
    }
} else if (inicio === 2) {
    if (temChave) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Você ja pegou o pote de ouro e a chave");
    } else if (!temChave) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Você pegou o pote de ouro, dentro dele você achou uma chave");
    console.log ("-> O que você vai fazer agora?");
    temChave = true;
    }
} else if (inicio === 3) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Você tentou abrir a porta...");
    if (temChave) {
        console.log ("-> Você consegue abrir a porta com a chave encontrada!");
        jogoAtivo = false;
        saiudacasa = true;
    } else if (!temChave) {
        console.log ("-> Você tenta abrir a porta porém ela está trancada...");
        console.log("---------------------------------------------------------------");
    }
} else if (inicio !== 1 || 2 || 3) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Opções Invalida")
}
}


while (jogoAtivo1) {
    if (saiudacasa) {
        console.clear();
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                              ")
        console.log ("               ██                                                ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                            ")
        console.log ("██   ██                         ██    ██                           ")                                            
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
        console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, OESTE e LESTE:");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. NORTE.");
        console.log ("2. OESTE.");
        console.log ("3. LESTE.");
        console.log ("---------------------------------------------------------------");
        
    }
    console.log ("Comando?");
    floresta1 = Number(prompt("> "));

    if (floresta1 === 1) {
        console.clear();
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você se sente mais confiante em ir pelo norte...");
         // Randomização de 50% de chance de sucesso ou falha
      if (Math.random() < 0.5) {
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você tropeça em uma raiz e cai!");
        console.log ("-> Você perdeu tempo e precisa voltar.");
        console.log ("-> Você caminha de volta...");
        } else {
            console.log ("---------------------------------------------------------------");
            console.log (" ")
            console.log ("███████████████████████████████████████████████████████████████████")
            console.log ("██                                                                 ")
            console.log ("██                                                                 ")
            console.log ("██                                                                 ")
            console.log ("██                                                                   ")
            console.log ("██                                                                   ")
            console.log ("██                                                                 ")
            console.log ("██                                 ██                              ")
            console.log ("██                               ██████                       ███████")
            console.log ("██                              █  ██  █              ██   ████      ")
            console.log ("██                                 ██               ██  ████         ")
            console.log ("██                               ██  ██           ██                 ")
            console.log ("██                              ██    ██         ██                  ")                                            
            console.log ("████████████████████████████████████████████████████████████████████")
            console.log ("")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você encontra um atalho secreto!");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Ir pelo atalho");
        console.log ("2. Ignorar o atalho");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?")
        atalho = prompt ("> ");
        if (atalho == 1) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você avança rapidamente pela floresta.");
            console.log ("-> Você consegue sair da floresta, mas ainda restam segredos esperando para serem descobertos...");
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você venceu!!");
            console.log ("-> Parabens? você completou o BAD ENDING, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.");
            console.log ("---------------------------------------------------------------");
            BAD_ENDING = true;
            process.exit(1);
        } else if (atalho == 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Você acha perigoso e ignora o atalho");
            console.log ("-> Você decidi voltar as opções de caminhos");
            
        } else if (atalho !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
        }
      } 
    } else if (floresta1 === 2) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Você vai pelo caminho Oeste...")
        console.log ("-> De repente você de longe vê vindo um homem alto, com um machado e não muito amigavel.");
        console.log("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Fugir");
        console.log ("2. Se esconder");
        console.log("---------------------------------------------------------------");
        console.log ("Comando?");
        decisão1 = prompt("> ");
         if (decisão1 === "1") {
             console.clear();
             console.log("---------------------------------------------------------------");
             console.log ("-> Você começa a correr o mais rapido possivel...");
             console.log ("-> Porém infelizmente você tropeça em uma pedra, e leva uma machadada do homem")
             console.log("---------------------------------------------------------------");
             console.log ("-> Você Morreu!!");
                console.log("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log("---------------------------------------------------------------");
                process.exit(1);
         } else if (decisão1 === "2") {
             console.clear();
             console.log ("---------------------------------------------------------------");
             console.log ("-> Você decidi se esconder em uma moita ao seu lado");
             console.log ("-> Porém, infelizmente ele consegue te ver, e te mata com o machado!");
             console.log ("---------------------------------------------------------------");
             console.log ("-> Você Morreu!!");
                console.log("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log("---------------------------------------------------------------");
                process.exit(1);
            
         } else if (decisão1 !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
         }
    } else if (floresta1 === 3) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Depois de pensar, você decidi ir pelo Leste...") 
        console.log ("-> Você começa a adentrar a floresta densa...");
        saiudafloresta = true;
        jogoAtivo1 = false;
    } else if (floresta1 !== 1 || 2 || 3) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Opções Invalida")
    }
}


while (jogoAtivo2) {
    console.clear();
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                              ")
        console.log ("               ██                                                ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                            ")
        console.log ("██   ██                         ██    ██                           ")                                            
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("")
    console.log ("---------------------------------------------------------------");
    console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
    console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e LESTE:");
    console.log ("---------------------------------------------------------------");
    console.log ("Opções:");
    console.log ("1. NORTE.");
    console.log ("2. SUL.");
    console.log ("3. LESTE.");
    console.log ("---------------------------------------------------------------");
    console.log ("Comando?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            console.log (" ");
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você já tentou ir por aí!");
            console.log ("---------------------------------------------------------------");
        } else if (tentanovamente1) {
        console.clear();
        console.log ("                    █████████████████████████████████")
        console.log ("                    ██   ██                        ██")
        console.log ("                   ██  ██                           ██")
        console.log ("                 ██  ██                               ██")
        console.log ("                ██  ██                                 ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██               ████                ██")
        console.log ("               ██  ██               █  █                ██")
        console.log ("               ██  ██               █  █                ██")
        console.log ("               ██  ██               █  █                ██ ")
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você decidi ir pelo Norte...");
        console.log ("-> Você encontra uma cabana velha feita de madeira");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Entrar na cabana");
        console.log ("2. Ignorar a cabana");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?");
        cabana = prompt("> ");

        if (cabana === "1") {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você entra na cabana e encontra um baú velho");
            console.log ("-> Dentro do baú você encontra um pergaminho com um mapa");
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:");
            console.log ("1. Pegar o mapa");
            console.log ("2. Voltar para a bifurcação");
            console.log ("---------------------------------------------------------------");
            console.log ("Comando?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você pega o mapa e sai da cabana");
                tentanovamente1 = false;
                mapaachado = true;
                console.log ("---------------------------------------------------------------");
                console.log ("Opções:");
                console.log ("1. Voltar para a bifurcação");
                console.log ("---------------------------------------------------------------");
                console.log ("Comando?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    console.log (" ")
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você volta para a bifurcação...");
                }  else if (cabana !== 1 || 2) {
                    console.clear();
                    console.log("---------------------------------------------------------------");
                    console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
                }
            } else if (cabana1 === "2") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você volta a bifurcação")
            } else if (cabana1 !== 1 || 2) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
            }
        } else if (cabana === "2") {
            console.clear();
            console.log ("----------------------------------------------------------")
            console.log (" ")
            console.log ("███████████████████████████████████████████████████████████████████")
            console.log ("██                                                               ")
            console.log ("██                                                               ")
            console.log ("██                                                               ")
            console.log ("██                                                      ")
            console.log ("██                                                     ")
            console.log ("██                                                     █        ")
            console.log ("██                    ██                              ██")
            console.log ("██                  ██████                            ██")
            console.log ("██                 █  ██  █                           ██")
            console.log ("██                    ██                              ██")
            console.log ("██                  ██  ██                            ██-------")
            console.log ("██                 ██    ██                           ██     ------")                                       
            console.log ("████████████████████████████████████████████████████████████████████ ---")
            console.log ("")
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você ignora a cabana e continua o seu caminho...");
            console.log ("-> Após andar um pouco você encontra uma ponte quebrada");
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:");
            console.log ("1. Pular a ponte");
            console.log ("2. Voltar para a bifurcação");
            console.log ("---------------------------------------------------------------");
            console.log ("Comando?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você tenta pular a ponte, porém você cai e morre");
                console.log ("-> Você morreu!!");
                console.log ("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------");
                process.exit(1);
            }  else if (ponte === "2") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você volta para a bifurcação...");
            } else if (ponte !== 1 || 2) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
            }
        } else if (cabana !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
        }
        }
    } else if (floresta2 == 2) {
        console.clear();
        console.log ("")
        console.log ("                                                   ")
        console.log ("                                                   ")
        console.log ("                                                                     ██")
        console.log ("                                                                     ████")
        console.log ("                  ██                                                 ██████ ")
        console.log ("                ██████                                               ████")
        console.log ("               █  ██  █                                              ██")
        console.log ("                  ██                                                 ██")
        console.log ("                ██  ██                                    █████████████████████████")
        console.log ("               ██    ██                               █        ████████████████    ------------------------")
        console.log ("███████████████████████████████████████████████████████------------------------                      ")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você vai pelo Sul.");
        console.log ("-> Você encontra um lago, e um barco a sua frente");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Pegar o barco");
        console.log ("2. Ignorar o barco");
        console.log ("3. Voltar para a bifurcação");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?");
        barco = prompt("> ");
        console.log (" ");

        if (barco === "1") {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você pega o barco e começa a remar...");
            console.log ("-> Porém o barco começa a afundar, e você morre afogado");
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você morreu!!");
            console.log ("---------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("---------------------------------------------------------------");
            process.exit(1);
        } else if (barco === "2") {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você ignora o barco e continua o seu caminho...");
            console.log ("-> Depois de andar um pouco você encontra um lobo");
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:");
            console.log ("1. Correr");
            console.log ("2. Se esconder");
            console.log ("---------------------------------------------------------------");
            console.log ("Comando?");
            decisão2 = prompt("> ");
            console.log (" ");
            if (decisão2 === "1") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você começa a correr o mais rapido possivel...");
                console.log ("-> Porém o lobo é mais rápido e te alcança, e te mata");
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você morreu!!")
                console.log ("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log("----------------------------------------------------");
                process.exit(1);
            } else if (decisão2 === "2") {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você se esconde em uma caverna ao lado");
                console.log ("-> Infelizmente aquela caverna era a casa do lobo, e ele te mata");
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você morreu!!");
                console.log ("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------");
                process.exit(1);
            }

    
} else if (barco === "3") {
    console.clear();
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você volta para a bifurcação...");
    } else if (barco !== 1 || 2 || 3) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
    }
} else if (floresta2 == 3) {
    console.clear();
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você decidi ir pelo Leste.");
    console.log ("-> Você atravessa as folhas e galhos, e encontra uma outra bifurcação");
   jogoAtivo2 = false;
   saiudafloresta1 = true;
} else if (floresta2 !== 1 || 2 || 3) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
}
}

while (jogoAtivo3) {
    
    if (mapaachado) {
        console.clear();
        console.log ("-> Quer usar o mapa?");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Sim");
        console.log ("2. Não");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?");
        mapa = prompt("> ");
        console.log (" ");

        if (mapa == 1){
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> O mapa diz que o caminho do Norte é o caminho certo");
            console.log ("---------------------------------------------------------------");
            console.log ("-> *AVISO* Você não pode usar o mapa novamente");
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você decide não usar o mapa");

        } else if (mapa !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você perdeu a chance de usar o mapa!!")
            mapaachado = false
        }
    }
    console.log ("--------------------------------------------------------------")
    console.log (" ")
    console.log ("█████████████████████████████████████████████████████████████")
    console.log ("██           ██                                             ")
    console.log ("██           ██                                                                  ")
    console.log ("██           ██                                                           ")
    console.log ("██   ██    ██                                                           ")
    console.log ("██ ██  ████         ██                                ")
    console.log ("████              ██████                 ██           ")
    console.log ("██               █  ██  █        ████████████              ")
    console.log ("██                  ██               █ █ ██           ")
    console.log ("██                ██  ██             █ █             ")
    console.log ("██               ██    ██            █ █              ")
    console.log ("█████████████████████████████████████████████████████████████")
    console.log (" ")
    console.log ("---------------------------------------------------------------");
    console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
    console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e OESTE:");
    console.log ("---------------------------------------------------------------");
    console.log ("1. NORTE.");
    console.log ("2. SUL.");
    console.log ("3. OESTE.");
    console.log ("---------------------------------------------------------------");
    console.log ("Comando?");
    floresta3 = Number(prompt("> "));
    console.log (" ");

    if (floresta3 == 1)  { //Norte
        console.clear();
        console.log ("█████████████████████████████████████████████████████████████")
        console.log ("██           ██                                             ")
        console.log ("██           ██                                                                  ")
        console.log ("██           ██                                                           ")
        console.log ("██   ██    ██                                                           ")
        console.log ("██ ██  ████         ██                                ")
        console.log ("████              ██████                 ██           ")
        console.log ("██               █  ██  █        ████████████              ")
        console.log ("██                  ██               █ █ ██           ")
        console.log ("██                ██  ██             █ █             ")
        console.log ("██               ██    ██            █ █              ")
        console.log ("█████████████████████████████████████████████████████████████")
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você decidi ir pelo lado Norte.");
        console.log ("-> Você passa pelo caminho e encontra algo brilhante no chão");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Escavar o chão");
        console.log ("2. Ignorar o objeto");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?");
        objeto = prompt("> ");

        if (objeto == 1) { // Escavar o chão
            if (papega) {
                console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você escava o chão e encontra uma foto de uma criança");
            console.log ("-> Na foto você vê que tem algo escrito atrás");
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:");
            console.log ("1. Ler o que está escrito");
            console.log ("2. Ignorar a foto");
            console.log ("---------------------------------------------------------------");
            fotopega = true
            console.log ("Comando?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> A foto diz: 'VOCÊ NÃO DEVERIA TER VINDO AQUI'");
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você se sente um pouco assustado...");
                console.log ("-> Depois de um tempo você decide continuar o seu caminho");
                console.log ("-> Você chega em uma bifurcação");
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            } else if (foto == 2 ) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você ignora a foto e continua o seu caminho...");
                console.log ("-> Você chega em uma bifurcação");
                fotopega = true
                leufoto = false
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            }  else if (foto !== 1 || 2) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
            }
        } else if (!papega){
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você não pode escavar, porque você não tem uma pá!");
        }
        } else if (objeto == 2) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você ignora o objeto e continua o seu caminho...");
            console.log ("-> Você chega em uma bifurcação");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        }  else if (objeto !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
        }
    } else if (floresta3 == 2) {
        console.clear();
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você vai pelo caminho do Sul...");
        console.log ("-> Você encontra um lobo");
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:");
        console.log ("1. Correr");
        console.log ("2. Se esconder");
        console.log ("---------------------------------------------------------------");
        console.log ("O que deseja fazer agora?");
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?")
        decisão2 = prompt("> ");
        console.log (" ")

        if (decisão2 === "1") {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você começa a correr o mais rapido possivel...");
            console.log ("-> Porém o lobo é mais rápido e te alcança, e te mata");
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você morreu!!");
            console.log ("---------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("---------------------------------------------------------------");
            process.exit(1);
} else if (decisão2 === "2") {
    console.clear();
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você se esconde em uma caverna ao lado");
    console.log ("-> infelizmente aquela caverna era a casa do lobo, e ele te mata");
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você morreu!!");
    console.log ("---------------------------------------------------------------");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("---------------------------------------------------------------");
    process.exit(1);
    }
} else if (floresta3 == 3) {
    console.clear();
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você decidi ir pelo Oeste");
    console.log ("-> Você cai dentro do rio e morre afogado");
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você morreu!!");
    console.log ("---------------------------------------------------------------");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("---------------------------------------------------------------");
    process.exit(1);
}  else if (floresta3 !== 1 || 2 || 3) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
}
}



while (jogoAtivo4) {
    console.log ("---------------------------------------------------------------");
console.log ("-> Pegue sua recompensa, a lua palida sorri para você")
console.log ("-> A sua frente exitem caminhos, ao NORTE e SUL");
console.log ("---------------------------------------------------------------");
console.log ("Opções:");
console.log ("1. NORTE");
console.log ("2. SUL");
console.log ("---------------------------------------------------------------");
    console.log ("Comando?")
    floresta4 = prompt("> ");
    console.log (" ")

    if (floresta4 == 1) {
        console.clear();
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você escolhe ir para o Norte...");
        console.log ("-> Você encontra um carro encostado na beira de uma estrada a sua frente.")
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:")
        console.log ("---------------------------------------------------------------")
        console.log ("1. Tentar ligar o carro.")
        console.log ("2. Ignorar o carro")
        console.log ("3. Sair andando pela estrada")
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?")
        carro = Number(prompt("> "))
        console.log (" ")

        if (carro == 1) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você tenta ligar o carro...")
            console.log ("-> Você consegue ligar o carro.")
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:")
            console.log ("1. Ir embora (ESSA AÇÃO NÃO TERÁ VOLTA!!)")
            console.log ("2. Voltar para o caminho")
            console.log ("---------------------------------------------------------------");
            console.log ("Comando?")
            carro1 = Number(prompt("> "))
            console.log (" ")

            if (carro1 == 1) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você decidi ir embora pela estrada!")
                if (fotopega && leufoto) {
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você antes de ir embora lembra da foto da criança, e resolve chamar a policia assim que chegar em sua casa!")
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você venceu!!")
                    console.log ("-> Você conseguiu o final GOOD ENDING, ainda existem finais alternativos.")
                    console.log ("---------------------------------------------------------------");
                    trueending1 = true
                    process.exit(1)
                } else if (fotopega && !leufoto) {
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você antes de ir embora lembra da foto da criança, mas acha que uma pessoa simplesmente deixou cair...")
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você venceu!!");
                    console.log ("-> Parabens? você conseguiu final BAD ENDING 2, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ ");
                    console.log ("---------------------------------------------------------------");
                    process.exit(1)
                } else if (!leufoto && !fotopega){
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você vai embora sem nem pensar direito.")
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você venceu!!")
                    console.log ("-> Parabens? você consegui o final BAD ENDING 3, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.")
                    console.log ("---------------------------------------------------------------");
                    process.exit (1)
                }
            } else if (carro1 == 2) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você resolve voltar para o caminho inicial")
            } else if (carro1 !== 1 || 2) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
            }
        } else if (carro == 2) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você ignora o carro!")
            console.log ("---------------------------------------------------------------");
            console.log ("-> Chegando ao final do caminho, você nota que perdeu tempo e terá que voltar para o caminho inicial")
            console.log ("-> Você caminha devolta...")

        } else if (carro == 3){
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> você decidi ir andando pela estrada...")
            console.log ("-> Isso não foi uma boa ideia!")
            console.log ("-> Um carro sem estar com o farol ligado, não te enxerga e tem mata atropelado.")
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você Morreu!!")
            console.log ("---------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("---------------------------------------------------------------");
            process.exit(1);

        } else if (carro !== 1 || 2 || 3) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
        }
    } else if (floresta4 == 2) {
        console.clear();
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você decidi ir pelo Sul...")
        console.log ("-> Nesse caminho, você encontra uma casa, que parece ser normal.")
        console.log ("---------------------------------------------------------------");
        console.log ("Opções:")
        console.log ("1. Entrar na casa.")
        console.log ("2. Ignorar a casa e seguir o caminho.")
        console.log ("---------------------------------------------------------------");
        console.log ("Comando?")
        casa2 = Number(prompt("> "))
        console.log (" ")

        if (casa2 == 1) {
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você entra na casa, os seus passos fazem barulhos assustadores.")
            console.log ("-> A primeira coisa que você faz ao entrar é procurar se tem alguem morando ou preso alí")
            console.log ("---------------------------------------------------------------");
            console.log ("-> Depois de um tempo, você não acha ninguem, então aproveita para revistar a casa em busca de um telefone ou algo utíl.")
            console.log ("-> Dentro da casa você acha um bilhete com um mapa desenhado com setas")
            console.log ("---------------------------------------------------------------");
            console.log ("Opções:")
            console.log ("1. Seguir mapa.")
            console.log ("2. Não seguir o mapa.")
            console.log ("---------------------------------------------------------------");
            console.log("Comando?")
            mapa3 = Number(prompt("> "))
            console.log (" ")

            if (mapa3 == 1) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você segue o mapa, tomando muito cuidado para não se perder.")
                console.log ("-> Ao chegar no X, você nota que o chão está fazendo um barulho estranho como se fosse madeira.")
                console.log ("-> Com receio de ter algo horrivél alí. Você se pergunta se deveria cavar ou apenas ignorar...")
                console.log ("---------------------------------------------------------------");
                console.log ("Opções:")
                console.log ("1. Escavar em busca de algo.")
                console.log ("2. Não escavar.")
                console.log ("---------------------------------------------------------------");
                console.log ("Comando?")
                cavar = Number(prompt("> "))
                console.log (" ")

                if (cavar == 1) {
                    console.clear();
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você começa a cavar o chão e nota uma sirueta de um ser-humano...")
                    console.log ("-> Você acaba de cavar e fica assustado com o que vê...")
                    console.log ("---------------------------------------------------------------");
                    console.log ("-> Você acha o corpo de uma pobre criança...")
                    console.log ("-> Seu coração começa a acelerar...")
                    console.log ("-> Até que de repente você...")
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("-> Parabens!!")
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("—— 40.24248 ——")
                   console.log (" ")
                   console.log ("—— -121.4434 ——")
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("CRTHR FHN ERPBZCRAFN!!")
                   console.log ("----------------------------------------------------------------------------")
                    process.exit (1)

                } else if (cavar == 2) {
                    console.clear();
                    console.log ("----------------------------------------------------------------------------")
                    console.log ("-> Você não cava e ignora o barulho, até que uma pessoa se aproxima")
                    console.log ("-> Ele chega e te da uma machadada na barriga, enquanto você morre, você vê o rosto de um homem.")
                    console.log ("----------------------------------------------------------------------------")
                    console.log ("-> Você Morreu!!")
                    console.log ("---------------------------------------------------------------");
                    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                    console.log ("---------------------------------------------------------------");
                    process.exit(1);
                    
                }  else if (cavar !== 1 || 2) {
                    console.clear();
                    console.log("---------------------------------------------------------------");
                    console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
                }

            } else if (mapa3 == 2) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você acha que o mapa pode ser uma armadilha, e o ignora.")
                console.log ("-> Sem analisar o mapa, você resolve procurar na casa denovo...")
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você fica alguns minutos procurando, e isso foi tempo suficiente pro dono da casa voltar...")
                console.log ("-> Ele nota que suas coisa estão fora do lugar.")
                console.log ("-> Então ele começa a procurar pelo invasor.")
                console.log ("-> Por falta de sorte, ele te acha enquanto você se escondia em um guarda roupas...")
                console.log ("---------------------------------------------------------------");
                console.log ("Você Morreu!!")
                console.log ("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------");
                process.exit(1);
                
            }  else if (mapa3 !== 1 || 2) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
            }

            
        } else if (casa2 == 2) {
            console.clear();
            if (!casafora) {
                casafora = true
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você com medo, decide não entrar na casa.")
            console.log ("---------------------------------------------------------------");
            console.log ("-> Já que você ignorou a casa, você continua o caminho.")
            console.log ("-> Onde o caminho fica dando voltas em sí mesmo...")
            console.log ("-> Depois de alguns minutos você percebe isso e resolve voltar pra bifurcação inicial!")
            } else if (casafora) {
                console.clear();
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você ja tentou fazer isso...")

            }
        }  else if (casa2 !== 1 || 2) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
        }
    }  else if (floresta4 !== 1 || 2) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> Opções Invalida, você voltou á bifurcação como punição!!")
    }
}