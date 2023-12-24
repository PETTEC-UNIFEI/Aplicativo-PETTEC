export const coursePages = [
    {
        id: "0",
        title: "Configuração",
        videoId: "IzrMMrFAM94",
        text: "Para este tutorial será utilizado a plataforma online repl.it que pode ser encontrada no seguinte site:\n  -> https://repl.it/.\n\nAo acessar a página deve-se clicar em start coding. Em seguida será pedido que você crie uma conta, faça isso e siga os passos que o próprio site fornece.\nNa hora de escolher as linguagens deve-se escolher a linguagem python e mais outras duas de sua preferência, pois o site exige que se escolha ao menos três." },
    {
        id: "1",
        title: "Introdução",
        videoId: "IAGE_GSpGFg",
        text: "Neste tutorial será apresentado os conceitos básicos da linguagem de programação Python. Não é necessário possuir nenhum conhecimento prévio em outras linguagens de programação.\n\nPython é uma linguagem de alto nível criada com o intuito de ser uma linguagem simples de se aprender, fácil de ler e concisa. Foi criada em 1992 por Guido van Rossum e desde então é desenvolvida de forma comunitária com a liderança da Python Software Foundation.\n\nÉ uma linguagem interpretada, ou seja, o código é executado linha a linha por um interpretador, isso permite uma rapidez em testar e corrigir programas. Python também possui tipagem dinâmica, o que permite que variáveis no programa possam mudar de tipo durante a execução do programa."
    },
    {
        id: "2",
        title: "Variáveis",
        videoId: "uJt3MsIBnNU",
        text: "Uma das coisas mais básicas que um programa de computador deve ser capaz de realizar é armazenar e modificar valores em memória. Para isso é feito uso das chamada variáveis.\n\nNo trecho de código cria-se uma variável chamada a e atribui-se a ela o valor 15. Na linha seguinte usa-se o comando print para exibi-la.\n\nO nome de uma variável pode ter qualquer comprimento desde que comece com uma letra, ou _, e não utilize nenhum símbolo não alfanumérico. valor, rato1, grafenó, Aphex_Twin e x_ são exemplos de nomes válidos. pão quadrado, 123gameplays, tatu#mola? e pula-pula exemplos de nomes inválidos.\n\nA partir da linha em que se declara uma variável é possível modificar o seu valor.",
    },
    {
        id: "3",
        title: "Números",
        videoId: "h7ux9zkl4qY",
        text: "Em Python existem dois tipos principais de números, inteiros e reais.\n\nOs inteiros, chamados como ints na linguagem, são representados por números sem casas decimais.\n\nJá os números reais, também chamados de ponto flutuante ou floats, são escritos com casas decimais. Deve-se usar o ponto e não a vírgula para separar a parte inteira da fracionária.\n\nEntre números e variáveis contendo números, diversas operações matemáticas são suportadas. Tentar realizar uma operação matemática entre tipos não numéricos causará um erro e o programa não será executado.",
    },
    {
        id: "4",
        title: "Strings",
        videoId: "jtz80FbNqTg",
        text: "Como mencionado anteriormente, strings são valores que representam texto. Esse tipo de dado suporta também algumas operações como, por exemplo, o operador + pode ser utilizado para concatenar (unir) strings.\n\nÀs vezes também pode ser necessário converter um valor numérico para string e vice-versa. Para isso é muito simples, basta usar os comandos int() float() e str()..\nDessa forma pode-se concatenar essa variável com a string 'o numero inteiro é' sem problemas, o que não poderia ser feito diretamente com a variável inteiro. É importante ressaltar que o comando str() não modifica a variável original apenas cria.\n\nO operador “%” pode ser usado para realizar interpolação de strings. Representa uma forma alternativa a concatenação para compor variáveis, constantes e strings em uma nova string. Durante a interpolação símbolos especiais dentro da string são substituídos por valores indicados entre parênteses após o operador “%”. \n  -> F-Strings \n\nUma alternativa a interpolação de strings são as F-Strings. São semelhantes as strings literais porém, seguem o formato f”conteúdo” em vez de “conteúdo”. Ao se colocar o nome de uma variável entre chaves dentro do conteúdo de uma F-String seu valor é convertido para string e inserido na mesma.",
    },
    {
        id: "5",
        title: "Entrada de dados",
        videoId: "enyIsSINZbc",
        text: "Uma outra tarefa muito importante que os programas de computador devem realizar é a leitura de dados inseridos pelo usuário.\n\nPara isso existe o comando input() que ao ser executado pausa o programa e exibe uma mensagem pedindo que seja digitado algo. Após ser digitado e ser pressionado Enter o comando retornará uma string contendo o que foi digitado. ",
    },
    {
        id: "6",
        title: "Condicionais (if, else e elif)",
        videoId: "E_y0EdGpjdg",
        text: "Em certos casos pode querer-se executar um trecho de código apenas quando uma certa condição for satisfeita. Para isso se faz uso das expressões condicionais através das palavras-chave if e else.\n\nTodo o código que será executado pertencente ao if deve estar indentado em relação ao comando, ou seja, deve-se adicionar um carácter Tab. Por isso o código a seguir apresenta um erro. \n\nOutra palavra chave importante é elif que representa uma condição alternativa ao if. "
    },
    {
        id: "7",
        title: "Expressões Booleanas",
        videoId: "SxU5AUOyAds",
        text: "Expressões booleanas são expressões cujo valor resultante é verdade ou falso. Em Python valores falsos são representados pela palavra chave False e os verdadeiros por True.\n\nVárias operações podem ser realizadas sobre esses valores.\n  -> and: Resulta em verdadeiro se ambos os operandos são verdadeiros, falso caso contrário.\n -> or: Resulta em falso se ambos operandos são falsos, verdade caso contrário \n -> not: Inverte o valor do operador. ",
    },
    {
        id: "8",
        title: "Listas Declaração e Impressão",
        videoId: "1p12JD7HD1w",
        text: "Muitas vezes pode ser útil ter a capacidade de representar um conjunto de valores em uma única variável. Para isso existem as listas, que consistem em vários valores entre colchetes e separados por vírgula.\n\nPara acessar um único elemento de uma lista faz-se uso de índices, isto é, o nome da variável seguido de um número entre colchetes. Este número indica a posição do elemento que se quer acessar. Ressaltando que a posição começa a ser contada a partir do zero.\n\nUm comando muito útil que pode ser utilizado sobre listas é o len que retorna a sua quantidade de itens. \n\nO laço for também pode ser usado para percorrer os elementos de uma lista diretamente. Na realidade, a única coisa que o comando for faz é iterar sobre os elementos de uma lista. O range, apresentado na seção anterior, não faz nada além de criar uma lista de números",
    },
    {
        id: "9",
        title: "Inserção em Listas",
        videoId: "qs1hgQbI75Y",
        text: "A linguagem Python oferece alguns comandos, chamados métodos, capazes de realizar determinadas operações sobre listas. Eles são acessados colocando um ponto após o nome da variável e em seguida o nome do método terminado em abre e fecha parênteses.\n\nAlguns métodos podem receber parâmetros os quais devem ficar no interior dos parênteses.\nA seguir são apresentados alguns. \n  -> lista.sort() - Ordena os elementos de uma lista. \n  -> lista.append() - Adiciona o elemento ao final da lista. \n  -> lista.remove() - Remove elemento com valor escolhido\n  -> lista.reverse() - Reverte a ordem da lista.\n  -> lista.clear() - Remove todos os elementos \n  -> lista.insert(,) - insere elemento na posição escolhida da lista\n  -> lista.extend([]) - adiciona os elementos da lista ao final",
    },
    {
        id: "10",
        title: "Listas Remoção",
        videoId: "wnZV7uKw1KM",
        text: "A linguagem Python oferece alguns comandos, chamados métodos, capazes de realizar determinadas operações sobre listas. Eles são acessados colocando um ponto após o nome da variável e em seguida o nome do método terminado em abre e fecha parênteses.\n\nAlguns métodos podem receber parâmetros os quais devem ficar no interior dos parênteses.\nA seguir são apresentados alguns. \n  -> lista.sort() - Ordena os elementos de uma lista. \n  -> lista.append() - Adiciona o elemento ao final da lista. \n  -> lista.remove() - Remove elemento com valor escolhido\n  -> lista.reverse() - Reverte a ordem da lista.\n  -> lista.clear() - Remove todos os elementos \n  -> lista.insert(,) - insere elemento na posição escolhida da lista\n  -> lista.extend([]) - adiciona os elementos da lista ao final",
    },
    {
        id: "11",
        title: "Compressão de Listas",
        videoId: "_VpCsdgU1Fo",
        text: "Listas podem ser criadas também através das denominadas compreensão de listas,semelhantes a notação de conjuntos encontrada na matemática.",
    },
    {
        id: "12",
        title: "Tuplas Estrutura",
        videoId: "vAjr9KBGegg",
        text: "Tuplas são semelhantes a listas, porém uma vez criadas não podem ser modificadas. São declaradas como listas, porém, se utilizando de parênteses.",
    },
    {
        id: "13",
        title: "Tuplas - Impressão e Métodos",
        videoId: "qs1hgQbI75Y",
        text: "Tuplas são semelhantes a listas, porém uma vez criadas não podem ser modificadas. São declaradas como listas, porém, se utilizando de parênteses.",
    },
    {
        id: "14",
        title: "Dicionarios - Declaração",
        videoId: "CU6tfQhE0Sg",
        text: "Os dicionários são uma estrutura no qual os dados são armazenados da forma chave-valor e podem ser acessados semelhantemente as listas e tuplas, porém utilizando-se das chaves, ao invés dos índices. Além disso, diferentemente das tuplas, os valores podem ser modificados ao decorrer da execução do programa.\n\nOutra questão interessante e importante a respeito dos dicionários é que as chaves são únicas. Os dicionários são declarados de forma literal a partir do uso de chaves e os respectivos chave-valor são separados através do uso de chaves. ",
    },
    {
        id: "15",
        title: "Dicionários - Obtenção dos dados",
        videoId: "Ip5iZTVJxWQ",
        text: "Os dicionários são uma estrutura no qual os dados são armazenados da forma chave-valor e podem ser acessados semelhantemente as listas e tuplas, porém utilizando-se das chaves, ao invés dos índices. Além disso, diferentemente das tuplas, os valores podem ser modificados ao decorrer da execução do programa.\n\nOutra questão interessante e importante a respeito dos dicionários é que as chaves são únicas. Os dicionários são declarados de forma literal a partir do uso de chaves e os respectivos chave-valor são separados através do uso de chaves. ",
    },
    {
        id: "16",
        title: "Dicionários - Adição, Modificação e Remoção de dados",
        videoId: "j80EFjm21jE",
        text: "Os dicionários são uma estrutura no qual os dados são armazenados da forma chave-valor e podem ser acessados semelhantemente as listas e tuplas, porém utilizando-se das chaves, ao invés dos índices. Além disso, diferentemente das tuplas, os valores podem ser modificados ao decorrer da execução do programa.\n\nOutra questão interessante e importante a respeito dos dicionários é que as chaves são únicas. Os dicionários são declarados de forma literal a partir do uso de chaves e os respectivos chave-valor são separados através do uso de chaves. ",
    },
    {
        id: "17",
        title: "Dicionários Compreenção de Dicionários",
        videoId: "nQX6Nab83A4",
        text: "Os dicionários são uma estrutura no qual os dados são armazenados da forma chave-valor e podem ser acessados semelhantemente as listas e tuplas, porém utilizando-se das chaves, ao invés dos índices. Além disso, diferentemente das tuplas, os valores podem ser modificados ao decorrer da execução do programa.\n\nOutra questão interessante e importante a respeito dos dicionários é que as chaves são únicas. Os dicionários são declarados de forma literal a partir do uso de chaves e os respectivos chave-valor são separados através do uso de chaves. ",
    },
    {
        id: "18",
        title: "Laços de Repetição - For",
        videoId: "luEVE-z4caw",
        text: "Outra funcionalidade básica que uma linguagem de programação deve fornecer é a capacidade de que um mesmo código possa ser executado repetidas vezes. Os principais tipos de laços são o while e o for. \n\nO laço for é utilizado de forma simplificada para um número fixo de repetições. Ele é formado pela palavra chave for seguido de um nome uma variável, palavra chave in e o comando range.\n\nO laço for é parecido com o laço while, porém ele é utilizado, de forma simplificada,para um número fixo de repetições. Ele é formado pela palavra chave for seguido de um nome uma variável, palavra chave in e o comando range.",
    },
    {
        id: "19",
        title: "Laços de Repetição - While",
        videoId: "k2FVe5I7V3k",
        text: "O laço while executa repetidamente um trecho de código enquanto uma expressão booleana for verdadeira.",
    },
    {
        id: "20",
        title: "Funções",
        videoId: "8TjTSw9aigI",
        text: "Funções servem para evitar repetição de código além melhorar a organização e clareza do programa. Uma função é declarada com a palavra-chave def seguido do nome da função, abre e fecha parênteses, dois pontos e, na próxima linha indentada, o corpo da função.\n\nPara chamar uma função deve-se escrever o nome dela seguido de abre e fecha parênteses. Funções também podem receber parâmetros que permitem modificar o que a função fará quando chamada.\n\nPode-se passar quantos parâmetros quiser separando-os por vírgula. É possível que funções retornem valores. Para isso deve-se usar a palavra-chave return seguido do valor a ser retornado.\n\nFunções também podem ser recursivas, isto é, podem chamar a si mesmas. \n\n-> Funções Lambda: \nExiste uma forma alternativa de declarar funções mais simples. Essa forma é chamada de função lambda. Esses tipos de funções não possuem nome e devem ser armazenadas em uma variável. Os parâmetros vêm logo depois de lambda e separados por vírgula, e após os dois pontos vem o corpo da função que deve ser uma expressão e é automaticamente retornada. A função lambda do último exemplo retorna o quadrado de um número x.",
    },
    {
        id: "21",
        title: "Módulos",
        videoId: "UesS_crrpEk",
        text: "Em Python, módulos são arquivos de código que podem ser trazidos para um programa. Permitem que o programador possa utilizar em seu código funções, classes,variáveis e etc. criados em outros arquivos.\n\nEsses módulos podem ser trazidos para o programa através da linha de código abaixo. A palavra reservada import seguido do nome do módulo.\n\nPara criar um módulo para ser importado por um outro programa Python, basta criar um arquivo de código fonte com a extensão “.py”. Sendo possível importar as funções deste módulo em um programa desde que ambos os arquivos de código fonte estejam na mesma pasta ",
    },
    {
        id: "22",
        title: "Módulos - Biblioteca Padrão",
        videoId: "Y_PgySp38f4",
        text: "O Python quando instalado traz consigo diversos módulos que oferecem funcionalidades básicas que provavelmente muitos programas necessitam, como funções matemáticas, acesso a arquivos em disco, chamadas de funções do Sistema Operacional e etc. Esses módulos são comumente chamados de biblioteca padrão da linguagem.\n\nUm dos módulos mais utilizados da biblioteca padrão é o math que traz consigo diversas funções matemáticas. Outro módulo muito útil é o random que permite a geração de números aleatórios.\n\nOs módulos também podem ser importados por partes através da palavra reservada from.\n\nTambém é possível importar diretamente tudo do módulo usando o from e '*'. ",
    },
    {
        id: "23",
        title: "Programação Orientada a Objeto",
        videoId: "1jpry3V5YZc",
        text: "A Programação Orientada a Objetos (POO) é um paradigma de programação que consiste na estruturação do código através do uso de dos chamados 'objetos'. Essesobjetos não são nada mais que um tipo de dado que carrega variáveis e funções dentro de si. \n\nTambém é possível criar seus próprios tipos de objetos através da palavra reservada class. A seguir é definido o tipo de objeto 'Barata' que representa uma barata e possui algumas funções que simulam seu comportamento.\n\nA definição de um tipo de objeto é chamado classe e funções que pertencem a uma determinada classe são chamadas de métodos.\n\nApós definido o tipo do objeto pode-se de fato criá-lo e guardá-lo em uma variável.Essa criação é chamada de instanciação. Para isso basta escrever o nome do objeto seguido de abre e fecha parênteses, como se fosse a chamada de uma função. E para chamar um determinado método desse objeto usa-se o nome da variável que recebeu o objeto seguido do operador '.' e a chamada da função.\n\n-> Construtores e Atributos:\n\nTambém é possível que um objeto possua variáveis internas. Para criá-las é preciso entender o conceito de construtor. O construtor é uma função que é chamada durante a instanciação do objeto, ela sempre possui o nome de '__init__'(dois underlines no começo e dois no final) e recebe um parâmetro chamado 'self'.\n\nAtravés do construtor podemos adicionar variáveis internas para o objeto. Para isso usamos o parâmetro 'self' que o construtor recebe. Essas variáveis internas aos objetos são chamadas de atributos. Elas podem ser acessadas de forma semelhante aos métodos, porém sem os parênteses. \n\nO construtor também pode receber parâmetros, assim é possível customizar os valores dos atributos de um objeto durante a sua instanciação. Métodos também podem modificar os atributos de um objeto. Nesse caso, esses métodos devem receber um parâmetro 'self' que será usado para acessar o atributo ",
    },
    {
        id: "24",
        title: "POO - Classes abertas",
        videoId: "DsUqdG_cbHc",
        text: "As classes da linguagem Python são chamadas de 'abertas', pois podem ser alteradas em qualquer lugar do código, mesmo após serem definidas, sendo possível adicionar novos atributos e métodos. O mesmo se aplica a objetos.\n\nA diferença entre adicionar um método (ou atributo) na classe e no objeto é que no primeiro o método estará disponível para todos os objetos que são instâncias da classe, já no segundo estará disponível apenas ao objeto ao qual foi adicionado.\n\nAs classes fechadas são aquelas que são implementadas pela própria linguagem para representar tipos básicos, como strings, inteiros, listas e etc. Essas classes não permitem a adição de novos atributos e métodos.",
    },
    {
        id: "25",
        title: "POO - Atributos e Metódos Estáticos",
        videoId: "-vpZbug1otQ",
        text: "Atributos estáticos são aqueles que são compartilhados entre todas as instâncias de uma classe, ou seja, é como se o atributo fosse uma variável global, mas definida dentro da classe. Além disso, esses atributos estáticos podem ser acessados e modificados sem existir nenhuma instância da classe. Para defini-los basta fazer a declaração de uma variável no escopo da classe, fora de qualquer método.\n\nOs métodos estáticos são semelhantes, podem ser acessados sem nenhuma instância em qualquer lugar. Porém, eles não podem manipular atributos internos da classe, somente atributos estáticos. Para criar um método estático é necessário usar o decorador '@staticmethod' antes da declaração. Também não podem receber o parâmetro 'self'.",
    },
    {
        id: "26",
        title: "POO - Propriedades",
        videoId: "NSQmXX2uS_Q",
        text: "Propriedades são atributos cujo acesso e modificação são controlados por métodos. É muito útil para validar a modificação de um atributo. Por exemplo, se um determinado atributo representa um dia do mês, não é desejável que alguém possa modificá-lo de modo a inserir um número maior do que 31 ou menor que 1. Também seria necessário verificar se o mês tem 30 ou 31 ou dias.\n\nExistem duas formas de se definir uma propriedade, através do decorador '@property' ou da função 'property'. A seguir um exemplo com a primeira. Um decorador é simplesmente uma palavra chave começada com '@' colocado antes da definição de alguma variável, função, classe e etc.\nÉ necessário que as funções de 'get' e 'set' tenham o mesmo nome. E este nome deve ser diferente do atributo que essas funções estão relacionadas. \n\nA segunda forma de se definir propriedades é utilizando a função 'property'. Nesse formato é criado um atributo estático com o nome da propriedade que recebe a função 'property' passando como argumentos os métodos 'get' e 'set'.",
    },
    {
        id: "27",
        title: "POO - Herança",
        videoId: "Kmupc8iEKNI",
        text: "Outro pilar básico da programação orientada a objetos é o conceito de herança. Herança consiste em uma classe herdar métodos e atributos de uma classe base. Isso é muito útil pois evita que classes muito parecidas sejam escritas totalmente do zero. Também é ideal para modelar a relação entre objetos do mundo real, permitindo que um conjunto de objetos possam ser agrupados de acordo com suas características em comum. \n\nPara herdar de uma classe basta colocar o nome da classe mãe entre parênteses na declaração da classe .É importante ressaltar a necessidade de se chamar o construtor da classe base no construtor da classe derivada. É a chamada deste construtor que irá criar a definição dos atributos da classe. \n\nA linguagem Python também tem suporte a herança múltipla em que uma classe pode herdar de mais de uma classe base. Para isso deve-se colocar as classes separadas por vírgula durante a definição da classe.",
    },
    {
        id: "28",
        title: " Exemplo 1 Forca ",
        videoId: "C7lTvHQVhF0",
        text: "Nesta seção será apresentado um exemplo para reforçar boa parte do que foi abordado neste tutorial. O exemplo consiste em um simples jogo da forca que rodará diretamente do terminal. ",
    },
    {
        id: "29",
        title: "Exemplo 2 ",
        videoId: "7YicfxbKdcU",
        text: "Neste exemplo será introduzido uma biblioteca gráfica, para que você possa conseguir fazer um programa já com interação a eventos. Assim, será utilizada a biblioteca Tkinter, que já faz parte das bibliotecas padrão do python e que portanto, não será necessário realizar sua instalação. Será construído através deste exemplo um programa com formulário e uma espécie de “banco de dados” em memória.",
    },
    {
        id: "30",
        title: "Apresentação Comp Cientifica",
        videoId: "mdvR9UtHZ4M",
        text: "Como o Python é uma das linguagens mais utilizadas no mundo, não é nenhuma surpresa que ele possua uma extensa coleção de bibliotecas para computação científica disponível na internet.\n\nA biblioteca mais famosa nesse campo é sem dúvidas a Numpy, ela fornece uma ampla quantidade de funções e estruturas de dados capaz de tornar o Python um concorrente de Softwares na área, tais como Matlab, Scilab e Octave.\n\nUma outra biblioteca muito importante que trabalha juntamente com a Numpy é o Matplotlib, que auxilia na plotagem de gráficos, e também a Pandas, que é usada para análise e representação de dados.",
    },
    {
        id: "31",
        title: "Numpy",
        videoId: "7NO5I2zzi9I",
        text: "Numpy, abreviação de Numerical Python, é a principal biblioteca de computação numérica da linguagem, sendo utilizada como base para diversas outras bibliotecas que precisam executar esse tipo de atividade. É extremamente rápida com operações sobre listas, pois utiliza um tipo próprio de lista chamado ndarray que por baixo dos panos é semelhante aos arrays da linguagem C.\n\nAlém dos ndarrays, essa biblioteca fornece ainda diversas funções matemáticas relacionadas à álgebra linear, geração de números aleatórios, transformadas de Fourier e etc\n\nPara instalar o numpy é bem simples, basta abrir um terminal e executar o seguinte comando: \n  -> pip install numpy\n\nO comando pip é o gerenciador de pacotes do Python, ele permite instalar, atualizar e remover módulos da linguagem. Para instalar um módulo deve-se passar o argumento install seguido do nome do módulo.\nPara usar a biblioteca em seu código é necessário importar seu módulo que possui o nome numpy.\n  -> import numpy\n\nPara evitar de se escrever numpy antes de toda a chamada de função poderia-se importar tudo que existe dentro do módulo da seguinte forma: \n  -> from numpy import * \n\nPorém isso traria para o escopo global funções do Numpy que entrariam em conflito com outras funções do Python, como a função max. Por isso é recomendado importar o módulo e renomeá-lo para um nome mais curto como “np”.\n  -> import numpy as np\n\nAssim as funções do Numpy podem ser chamadas da seguinte forma:\n  -> np.max([1,2,3,4])",
    },
    {
        id: "32",
        title: "Numpy - Arrays",
        videoId: "nREG4xTDfY0",
        text: "Como dito anteriormente o Numpy implementa o seu próprio tipo de lista chamado ndarray que é semelhante aos arrays da linguagem C e tão rápido quanto. Para se declarar um ndarray em Python a partir de uma lista usa-se a função array.\n\nDiferentemente das listas em Python um ndarray não pode conter elementos de tipos diferentes, ou seja, não se pode criar um array com um elemento do tipo inteiro, outro elemento do tipo booleano e outro com o tipo string por exemplo.\n\nA maioria das operações realizadas com as listas em Python também são suportadas pelos ndarrays. Outra forma de se criar ndarrays é através da função arange que é semelhante a função range do Python. \n\nOutra grande vantagem dos ndarrays sobre as listas do Python é que operações básicas realizadas entre valores escalares também podem ser realizadas nos ndarrays usando a mesma sintaxe. \n\nAs operações também podem ser realizadas entre ndarrays. Importante ressaltar que as operações devem ser realizadas entre ndarrays com o mesmo número de elementos.",
    },
    {
        id: "33",
        title: "Numpy - Matrizes",
        videoId: "okP-gkYhH9Q",
        text: "Matrizes são arrays bidimensionais, ou seja, um determinado elemento deve ser acessado utilizando dois índices, um que indica a coluna e outro a linha. Para representar esse tipo de estrutura com Numpy criamos ndarrays de ndarrays. Uma das formas de se realizar isso é passar para a função np.array uma lista de listas.\n\nUm atributo importante presente nos ndarrays é o shape que consiste em uma tupla de valores inteiros que indicam o formato da matriz. No caso da matriz dos exemplos anteriores, ao acessar esse atributo, temos a tupla (2, 2) que indica que essa matriz possui duas linhas e duas colunas.\n\nOutra maneira de criar matrizes é utilizando as funções np.zeros e np.ones. A primeira cria uma matriz preenchida com 0s e a segunda uma matriz preenchida com 1s. Ambas funções recebem um valor escalar ou tupla como argumento. Passando um escalar n, essas funções retornam um array unidimensional com n elementos. Já com uma tupla contendo 2 elementos, essas funções retornam uma matriz com o formato indicado por essa tupla.\n\nTambém existem outras funções para se criar arrays, como por exemplo, np.eye que cria uma matriz identidade com o formato especificado pela tupla que recebe, e também np.full que é semelhante a zeros e ones com a diferença que recebe de argumento, além de uma tupla, o valor que será usado para preencher.\n\nNa realidade é possível criar ndarrays com um número arbitrário de dimensões. Para se criar um array tridimensional por exemplo deve-se passar uma lista de lista de lista para a função np.array, ou usar as funções np.zeros, np.ones e etc. passando uma tupla com 3 elementos.",
    },
    {
        id: "34",
        title: "Numpy - Indexação de Arrays",
        videoId: "-tYgXNr5eCk",
        text: "Os ndarray oferecem alguns recursos avançados de indexação de arrays. Um deles é o chamado slicing que permite obter sub-arrays de um array da seguinte forma:\n  -> a = np.array(['a', 'b', 'c', 'd', 'e', 'f'])\n  -> b = a[0:3]\n\nUsando a sintaxe acima é possível extrair um subarray de um determinado array. Entre os colchetes ao invés de ser passado um único valor é passado um intervalo indicando o índice dos elementos que formarão o sub array. O valor a esquerda do “:” indica em qual elemento começará o subarray e o segundo o índice do elemento que deixaŕa de fazer parte do sub-array, logo esse elemento não será incluído. \n\nTambém é impossível omitir o valor da lado esquerdo ou direito do “:”, indicando respectivamente para se começar o primeiro elemento, ou terminar no último. Omitindo-se ambos valores é retornado o array inteiro",
    },

    {
        id: "35",
        title: "Jupyter",
        videoId: "jEr2gkJVMnY",
        text: "Uma ferramenta muito popular entre os programadores que trabalham com computação numérica e análise de dados é o Jupyter Lab. Esta ferramenta open source oferece um ambiente de desenvolvimento onde código e dados possam ser trabalhados de forma interativa. Instruções para se utilizar cada uma dessas ferramentas pode ser encontrada no site oficial.\n\nPara esse tutorial será utilizado uma versão mais simples do Jupyter Lab chamado Jupyter Notebook, que embora com menos funcionalidades será suficiente para este tutorial. Para acessá-lo, a partir do site oficial, clique no botão “Try it in your browser”",
    },

    {
        id: "36",
        title: "Matplotlib",
        videoId: "aRF4wCsQtHU",
        text: "É uma biblioteca que oferece diversas funcionalidades para plotar gráficos e imagens. Se integra muito bem com o Numpy. A instalação pode ser realizada através do pip rodando o seguinte comando em um terminal:\n  -> pip install numpy\n\nTodas as funcionalidades que serão utilizadas nesse tutorial estão contidas no submódulo pyplot, por isso somente ele será importado. Além disso, é uma convenção renomeá-lo para plt.\n  -> import matplotlib.pyplot as plt \n\n",
    },

    {
        id: "37",
        title: "Matplotlib - Parte 2",
        videoId: "T1TfPn6EaBk",
        text: "É uma biblioteca que oferece diversas funcionalidades para plotar gráficos e imagens. Se integra muito bem com o Numpy. A instalação pode ser realizada através do pip rodando o seguinte comando em um terminal:\n  -> pip install numpy\n\nTodas as funcionalidades que serão utilizadas nesse tutorial estão contidas no submódulo pyplot, por isso somente ele será importado. Além disso, é uma convenção renomeá-lo para plt.\n  -> import matplotlib.pyplot as plt \n\n",
    },

    {
        id: "38",
        title: "Matplotlib - Parte 3",
        videoId: "okP-gkYhH9Q",
        text: "É uma biblioteca que oferece diversas funcionalidades para plotar gráficos e imagens. Se integra muito bem com o Numpy. A instalação pode ser realizada através do pip rodando o seguinte comando em um terminal:\n  -> pip install numpy\n\nTodas as funcionalidades que serão utilizadas nesse tutorial estão contidas no submódulo pyplot, por isso somente ele será importado. Além disso, é uma convenção renomeá-lo para plt.\n  -> import matplotlib.pyplot as plt \n\n",
    },

    {
        id: "39",
        title: "Exemplo 3",
        videoId: "NfUymj-8CJw",
        text: "Neste exemplo temos o uso da biblioteca gráfica tkinter abordada anteriormente a ideia é um programa simples para organizar os dados mais básicos de um personagem de RPG de alguns jogadores, o código funciona com uma interface simples, onde é possível cadastrar jogadores usando o email e um nome do jogador, esses dados ficam salvos e podem ser consultados usando a própria interface, são então sorteadas, algumas informações da personagem e essas são enviadas para o email cadastrado.",
    },

];