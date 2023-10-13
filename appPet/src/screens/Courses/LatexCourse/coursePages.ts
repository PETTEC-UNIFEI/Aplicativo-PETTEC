export const coursePages = [
    {
        id: "0",
        title: "Introdução",
        videoId: "roLmSWsaMlU",
        text: "LATEX \n\n LATEX é um pacote de macros que permite ao autor de um texto compor e imprimir seu documento de um modo simples e com a maior qualidade tipográfica, utilizando padrões previamente definidos. Originalmente LATEX foi escrito por Leslie Lamport e usa a linguagem TEX para compor textos. Desde dezembro de 1994, o pacote LATEX está sendo atualizado pela equipe LATEX 3, dirigido por Frank Mittelbach, para incluir algumas das melhorias que se tinham solicitado por muito tempo, e para reunificar todas as versões modificadas que surgiram desde que apareceu o LATEX 2.09 alguns anos atrás. Porém o desenvolvimento de LATEX ´e crescente e j´a pode ser executado em todos os sistemas operacionais existentes hoje em dia, assim como foram criados muitos pacotes adicionais para realizar uma imensa quantidade de tarefas diferentes na edição de textos, assim como programas que auxiliam na produção dos mesmos.",
    },
    {
        id: "1",
        title: "Formatação de texto",
        videoId: "kXvZ8TEhCX4",
        text: "Comandos no LATEX \n\nOs comandos no LATEX são dados basicamente de dois modos: inicia-se com um backslash (  ) e têm um nome composto apenas por letras ou composto de um backslash () e um caractere especial.Algumas instruções requerem um parâmetro que deverá ser colocado entre chaves após a instrução.Outros comandos podem levar parâmetros opcionais que são anexados às instruções entre colchetes [ ]. \n\n Comentários \n\n Quando LATEX lê um caractere de porcentagem (%) enquanto processa um arquivo de entrada, ignora o resto do conteúdo da linha, que ficará em outra coloração. Isso pode ser útil para introduzir notas no arquivo de entrada que não serão mostradas na versão impressa.\n Quando LATEX processa um arquivo de entrada, espera deste que siga uma determinada estrutura.\n ",
    },
    {
        id: "2",
        title: "Criando Matriz",
        videoId: "Cexv044ijeM",
        text: " ",
    },
    {
        id: "3",
        title: "Inserindo Imagens",
        videoId: "1rcb2VGRoIM",
        text: " Para inserir figuras no documento é preciso primeiro carregar o pacote graphicx com o driver adequado, por exemplo:\n  usepackage [ pdtex ] { graphicx }\nCom o driver acima podemos incluir figuras em .png e .jpg através do comando:\n \n  includegraphics[ opt ]{ a r q ui vo }\n Como opt podemos passar as opçõoes:\n width: Redimensiona a figura para a largura especificada;\n height: Redimensiona a figura para a altura especificada;\n angle: Rotaciona a figura no sentido horário (em graus);\n scale: Rotaciona a figura na proporção especificada.\n E arquivo é o nome do arquivo com a figura, com o caminho. Caso não seja especificado o caminho o compilador irá assumir que a figura está no mesmo diretório que o arquivo fonte. E poss´ıvel especificar um caminho ´unico para todas as figuras através do comando:\n graphicspath {caminho}\n\no preâmbulo do documento, lembrando que o caminho deve conter a barra no final.\nAssim como nas tabelas, existe um ambiente específico para tratar uma figura como um objeto flutuante chamado figure que permite inserir legendas, aparecer em um índice de figuras.",
    },
    {
        id: "4",
        title: "Criando tabela ",
        videoId: "cr8ItcIDH1I",
        text: "Tabelas \n\n Uma tabela é especificada pelo ambiente tabular. E possível utilizar linhas horizontais e verticais sem se preocupar com a largura das colunas que é calculada automaticamente pelo LATEX. A criação de uma tabela é feita da seguinte forma:\n  begin { tabular }{ arg }\n O argumento arg especifica a quantidade e alinhamentos das colunas, ou seja:\n | adiciona uma linha vertical;\n l indica uma coluna alinhada à esquerda;\n r indica uma coluna alinhada à direita;\n c indica uma coluna com texto centralizado;\np{largura} indica uma coluna especial com texto justificado capaz de quebrar linhas, com a largura especificada com unidade de medida.\n Para preencher a tabela usamos & para passar para a próxima coluna,  para terminar uma linha e partir para uma nova e hline para criar uma linha horizontal. E poss´ıvel tamb´em adicionar linhas parciais com o comando cline{j-i} onde j e i são as colunas que conter˜ao a linha. Para que a tabela seja criada com sucesso é preciso que todas as linhas contenham o mesmo numero de colunas que o declarado na especificação da mesma",
    },
    {
        id: "5",
        title: "Criando tabela",
        videoId: "FzJBL55KXUk",
        text: "Uma tabela é especificada pelo ambiente tabular. E possível utilizar linhas horizontais e verticais sem se preocupar com a largura das colunas que é calculada automaticamente pelo LATEX. A criação de uma tabela é feita da seguinte forma:\n  begin { tabular }{ arg }\n O argumento arg especifica a quantidade e alinhamentos das colunas, ou seja:\n | adiciona uma linha vertical;\n l indica uma coluna alinhada à esquerda;\n r indica uma coluna alinhada à direita;\n c indica uma coluna com texto centralizado;\np{largura} indica uma coluna especial com texto justificado capaz de quebrar linhas, com a largura especificada com unidade de medida.\n Para preencher a tabela usamos & para passar para a próxima coluna,  para terminar uma linha e partir para uma nova e hline para criar uma linha horizontal. E poss´ıvel tamb´em adicionar linhas parciais com o comando cline{j-i} onde j e i são as colunas que conter˜ao a linha. Para que a tabela seja criada com sucesso é preciso que todas as linhas contenham o mesmo numero de colunas que o declarado na especificação da mesma",
    },
    {
        id: "6",
        title: "Tabela (união de linhas)",
        videoId: "FghcqA39in4",
        text: "Para mesclar colunas de células podemos usar o comando  multicolumn{num}{formato}{texto} que concatena o número de colunas especificado por num com o alinhamento especificado por formato e possui como conteúdo texto.\n Uma tabela pode ser inserida dentro do ambiente table o que faz dela um objeto flutuante. Vantagens de utilizar esse tipo de ambiente é a posição correta da tabela no texto, sem que seja quebrada em das páginas, por exemplo, faz com que a tabela apareça em um índice de tabelas e também a inserção de rótulos e legendas. Para usar este ambiente primeiramente é preciso usar o comando: \n  begin { table } [ pos ]\n Onde pos indica a posi¸c˜ao desejada para se posicionar a tabela verticalmente na p´agina e pode ser:\n h no local onde o texto ocorreu;\n t o topo da página;\n b no fim da página;\n p em uma página especial contendo somente objetos flutuantes;\n ! ignora alguns parˆametros internos;\n Caso seja passada mais de uma opção, a preferência é da que apareceu primeiro, caso nenhuma op¸c˜ao seja passada é utilizado [tbp] . Para adicionar uma legenda usamos ainda dentro do ambiente table o comando caption[legenda curta]{legenda longas} onde a legenda longa é a que será exibida junto com a tabela e a legenda curta, opcional, será exibida no índice+",
    },
    {
        id: "7",
        title: "Matemática",
        videoId: "kf0kvCaFvNs",
        text: "De modo a facilitar a inserção de fórmulas no documento, é recomendado à adição do pacote amsmath no cabeçalho do documento, com o comando à seguir:\n  usepackage {amsthm}\nO LATEX te permite utilizar de duas maneiras para escrever express˜oes matem´aticas, o modo inline  e o modo display.\nO modo inline é utilizado para escrever expressões que são parte de um texto. Mesmo quando não fazem parte de um texto, é possível utilizar esse modo para escrever em separado.",
    },
    {
        id: "8",
        title: "Cabeçalho do documento (documentclass)",
        videoId: "C5JPXXQgbcI",
        text: "Estrutura do arquivo de entrada\n\n Todo arquivo de entrada deve iniciar com o comando:\n documentclass[...]{...}\nIsso indica que tipo de documento é que se pretende criar. Após isso, incluem-se comandos que influirão no estilo do documento inteiro, ou podem-se carregar pacotes que anexarão novas propriedades ao sistema de LATEX. Para carregar um destes pacotes usa-se a instruao:  usepackage[...]{...}\nQuando todo o trabalho de configuração está realizado então começa o corpo do texto com a instrução: begin{document}\n A partir dessa instrução escreve-se o texto junto com alguns comandos e instruções úteis do LATEX.Ao finalizar o documento deve escrever-se o comando:\n  end{document}",
    },
];