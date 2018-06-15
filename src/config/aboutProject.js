/* eslint-disable max-len */

// logos
import museum from './logos/museum.svg';
import museumEn from './logos/museum-en.svg';
import urbica from './logos/urbica.svg';
import pgrants from './logos/pgrants.svg';
import fund from './logos/fund.svg';

export default [
  {
    id: 1,
    paragraph: {
      ru:
        '«Интерактивная карта ГУЛАГа» – это визуальная репрезентация истории советской лагерной системы, вошедшей в мировую историю под названием «ГУЛАГ». Карта создана Музеем истории ГУЛАГа и представляет собой пополняющуюся базу данных по истории и географии лагерей, колоний и спецпоселений, существовавших на территории страны с первых лет советской власти и до конца 1950-х годов.',
      en:
        '“Interactive map of the Gulag” — a permanently updated database of history and geography of forced labor camps that operated in the USSR from 1918 to 1960 — has been created by the Gulag History Museum.'
    }
  },
  {
    id: 2,
    paragraph: {
      ru:
        'Научную основу проекта составляют архивные материалы, фотоальбомы лагерей и колоний, мемуары и видеоинтервью свидетелей и участников событий. Информационной основой послужил фундаментальный справочник «Система исправительно-трудовых лагерей в СССР», изданный в 1998 году обществом «Мемориал» к 25-летию выхода в свет книги А.И. Солженицына «Архипелаг ГУЛАГ».',
      en:
        'The project shows the scale of Soviet punitive system whose prison camps were scattered across the entire country — from the Baltic Sea and the Crimea to Chukotka. The map shows the birth and evolution of this phenomenon, its climax in the times of the Great Patriotic War, and the eventual decline in the year of 1960.'
    }
  },
  {
    id: 3,
    paragraph: {
      ru:
        'Карта дает возможность проследить хронологию трагических событий, увидеть, как ГУЛАГ зарождался, набирал силу, достиг к концу 1940-х годов апогея в своем развитии и в середине 1950-х пошел на спад. Наглядно демонстрируется масштаб лагерной системы, которая охватила всю страну – от Балтийского моря и Крыма до Чукотки и Сахалина.',
      en:
        'A majority of the Gulag camps had their own production specialization. They were involved in agriculture, foresting, mineral production, building factories, railroads and other facilities. In some labor camps criminals lived side by side with political prisoners while other, so called “special camps,” were intended exclusively for incarceration of inmates convicted under the 58th article of the RSFSR Criminal Code.'
    }
  },
  {
    id: 4,
    paragraph: {
      ru:
        'На карте представлены исправительно-трудовые, особые и проверочно-фильтрационные лагеря. При нажатии на красную точку на карте открывается справка с географическими, историческими и экономическими сведениями о каждом объекте. Размеры точек меняются при прокрутке «шкалы времени» в зависимости от максимального количества заключенных, находившихся на тот момент в лагере.',
      en:
        'The map shows corrective labor, special and screening and filtration camps. Touching the red spot on the map will pop up a window containing geographic, historical and economic information about each camp. In future we are planning to add first camps in the RSFSR, NKVD special purpose camps in East Germany, children’s colonies and a section about ethnic deportations and the exiling of kulaks. Moreover, the map will be updated with photographs, documents and biographies of famous prisoners.'
    }
  },
  {
    id: 5,
    paragraph: {
      ru:
        'В дальнейшем на карте появится информация о первых лагерях на территории РСФСР, о детских колониях, спецпоселениях для ссыльных крестьян и депортированных народов, а также о спецлагерях в Советской зоне оккупации Германии. Карта будет пополняться также фотографиями и документами.',
      en:
        'The Gulag History Museum urges historians from Russian regions to take part in this project and will accept any information about the camps and their divisions. We are primarily interested in maps, photo albums of the NKVD-MVD, statistics and other historical documents that will be added as reference information to the interactive map.'
    }
  },
  {
    id: 6,
    paragraph: {
      ru:
        'Музей истории ГУЛАГа приглашает к сотрудничеству историков из регионов России и принимает любые сведения о лагерях и их подразделениях. В первую очередь интерес представляют картографические материалы, фотоальбомы НКВД–МВД СССР, статистические сведения, материалы из региональных архивов и музеев, а также современные фотографии «следов ГУЛАГа», которые будут добавлены как справочная информация к интерактивной карте.',
      en: ''
    }
  }
];

export const links = [
  {
    id: 'gmig',
    href: 'http://gmig.ru/',
    src: {
      ru: museum,
      en: museumEn
    },
    alt: 'gulag museum'
  },
  {
    id: 'urbica',
    href: 'https://urbica.co/',
    src: {
      ru: urbica,
      en: urbica
    },
    alt: 'urbica'
  },
  {
    id: 'pgrants',
    href: 'https://президентскиегранты.рф/',
    src: {
      ru: pgrants,
      en: pgrants
    },
    alt: 'president grants fund'
  },
  {
    id: 'memoryfund',
    href: 'http://memoryfund.ru/',
    src: {
      ru: fund,
      en: fund
    },
    alt: 'memory fund'
  }
];
