Para este projeto, você deverá aplicar os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).
<br/>
<br/>
REQUISITOS
<br/>

1 - Crie a classe Race

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.

Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de criar a classe abstrata Race.

Para que você tenha sucesso nesta quest, é importante saber que:

O arquivo foi criado no diretório src/Races/ e chamar Race.ts;
A classe Race deve ter os atributos privados: name e dexterity, ambos inicializados em seu construtor;
O atributo name dever ser do tipo string;
O atributo dexterity dever ser do tipo number;
name e dexterity devem ser recebidos como parâmetros e inicializados no construtor.
Os atributos da classe Race podem ser lidos, mas não podem ser alterados:
name deve retornar o tipo string;
dexterity deve retornar o tipo number.
A classe Race deve ter um método estático chamado createdRacesInstances, que retorna um number;
Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
Cada raça terá seu número máximo de instâncias, que será definido dentro de cada classe especializada;
Na classe Race, o método deve lançar um erro com a mensagem Not implemented.
A classe Race deve ter um getter abstrato chamado maxLifePoints que retorna um number;
Esse número corresponde à quantidade máxima de pontos de vida da raça;
Cada raça terá seu número máximo de pontos, que será definido dentro de cada classe especializada;
Na classe Race deve estar apenas a assinatura do método.
Dica: use a convenção de atributos privados para criar os atributos com _ e os getters para expor os atributos sem o _.


⚠️ Atenção:

Para que os testes funcionem corretamente, a classe Race deve ser exportada de forma padrão (com export default);
Deve ser criado o arquivo chamado index.ts dentro do diretório src/Races/;
A classe Race deve ser importada dentro deste arquivo e exportada também de forma padrão, da mesma forma que no diretório src/Battle/.

2 - Crie classes que herdam de Race

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda quest, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante saber que:

Os arquivos devem ser criados no diretório src/Races/;
Todas as raças devem estender da classe abstrata Race;
As classes Dwarf, Elf, Halfling e Orc devem ser criadas em arquivos com exatamente esses nomes.
Cada raça deve possuir um número máximo de pontos de vida (maxLifePoints), que deve ser inicializado em seu construtor:
A raça Dwarf deve receber 80 pontos de vida;
A raça Elf deve receber 99 pontos de vida;
A raça Halfling deve receber 60 pontos de vida;
A raça Orc deve receber 74 pontos de vida.
Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata Race;
Não se esqueça de fazer a sobrescrita (override) do(s) método(s) necessário(s).

⚠️ Atenção:

Assim como no requisito anterior, cada uma das classes criadas (Dwarf, Elf, Halfling e Orc) para este requisito deve ser exportada de forma padrão (com export default).
As classes (Dwarf, Elf, Halfling e Orc) devem ser importadas dentro de src/Races/index.ts e exportadas de forma explícita (export { class1, class2, classN }).
Não se esqueça de implementar o método createdRacesInstances nas classes herdeiras;

3 - Crie a interface Energy

Energia é um atributo vital para a maioria dos seres. No contexto de Trybers and Dragons, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de "stamina" . Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de "mana".

Sua próxima missão é tornar possível o uso destes dois tipos de energia: "stamina" e "mana". Para isso:

Crie uma interface chamada Energy, para isso:
Crie o arquivo Energy.ts na raiz do diretório src/.
A interface deverá possuir os atributos:
type_, do tipo EnergyType; ✨✨
Esse novo tipo pode deve receber os valores: 'mana' ou 'stamina';
O tipo EnergyType também deve ser exportado.
amount, do tipo number.
✨ Dica de mestre: ✨

Para implementar a interface Energy, é necessário criar um tipo novo, o type EnergyType;

⚠️ Atenção:

Para que os testes funcionem corretamente, a interface Energy deve ser exportada de forma padrão ( com export default).
EnergyType também deve ser exportado, mas este de forma explícita (export).

4 - Crie a classe Archetype

Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D. Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima quest será criar a classe abstrata Archetype.

Para que você tenha sucesso nesta quest, é importante saber que:

O arquivo Archetype.ts deve ser criado no diretório src/Archetypes/;
A classe Archetype deve ter os atributos privados: name, special, cost, que serão inicializados em seu construtor;
O atributo name dever ser do tipo string;
O atributo special dever ser do tipo number;
O atributo cost dever ser do tipo number;
name deve ser recebido como parâmetro e inicializado no construtor;
special e cost devem ser apenas inicializados no construtor com o valor 0.
Os atributos da classe Archetype podem ser lidos, mas não podem ser alterados:
name deve retornar o tipo string;
special deve retornar o tipo number;
cost deve retornar o tipo number.
A classe Archetype deve ter um método estático chamado createdArchetypeInstances que retorna um number:
Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe abstrata Archetype;
Cada arquétipo terá seu número máximo de instâncias, que será definido dentro de suas classes especializadas;
Na classe abstrata Archetype, o método deve apenas lançar um erro com a mensagem Not implemented.
A classe Archetype deve ter um getter abstrato chamado energyType que retorna uma EnergyType:
Esse tipo EnergyType corresponde ao tipo de energia que este arquétipo deve ter. (mana ou stamina)
Cada arquétipo terá o seu tipo de energia, que será definido dentro de suas classes especializadas;
A classe abstrata Archetype deve conter apenas a assinatura do método.

⚠️ Atenção:

Para que os testes funcionem corretamente, a classe Archetype deve ser exportada de forma padrão ( com export default);
Um arquivo index.ts deve ser criado dentro do diretório src/Archetypes/;
A classe Archetype deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito com Race.

5 - Crie classes que herdam de Archetype

Como você pode imaginar, há diversos arquétipos diferentes no mundo de Trybers and Dragons, cada um com as suas peculiaridades e alinhamentos. Agora, chegou a hora de você conhecer alguns desses arquétipos. E o que poderia ser melhor para isso do que criar classes para eles? Para isto, atenção às instruções a seguir:

Os arquivos devem ser criados no diretório src/Archetypes/;
Todos os arquétipos devem estender da classe abstrata Archetype.
No momento, vamos nos ater a quatro arquétipos muito comuns aos seres deste universo: (eles devem estar em quatro arquivos com os mesmos nomes)
Mage 🧙‍♀️;
Necromancer ☠️;
Warrior ⚔️;
Ranger 🍃.
Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente, e essa habilidade deve ser inicializada em seu construtor
Os arquétipos Mage🧙‍♀️ e Necromancer☠️ causam dano por meio de magia, através do uso de mana;
Os arquétipos Warrior ⚔️ e Ranger 🍃 causam dano por meio de sua força, usando stamina.
Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata Archetype;
Não se esqueça de fazer a sobrescrita (override) do(s) método(s) necessário(s);

⚠️ Atenção:

Assim como no requisito anterior, cada uma das classes criadas (Mage, Necromancer, Warrior e Ranger) para este requisito deve ser exportada de forma padrão ( com export default);
Novamente, as classes (Mage, Necromancer, Warrior e Ranger) devem ser importadas dentro de src/Archetypes/index.ts e exportadas de forma explícita (export { class1, class2, classN }).
Não se esqueça de implementar o método createdArchetypeInstances nas classes herdeiras;

6 - Crie a interface Fighter



