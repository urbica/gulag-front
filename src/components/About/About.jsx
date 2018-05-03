/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from '../../intl/helper';

// ico
import urbica from './urbica.svg';
import museum from './museum.svg';
import museumEn from './museum-en.svg';
import pgrants from './pgrants.svg';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Title from './Title';
import Description from './Description';
import SubTitle from './SubTitle';
import CompaniesContainer from './CompaniesContainer';
import Company from './Company';
import CompanyName from './CompanyName';
import Position from './Position';
import Name from './Name';
import Link from './Link';
import Footer from './Footer';

import content from '../../config/aboutProject';

const img = {
  ru: museum,
  en: museumEn,
  de: museumEn
};

const About = ({ locale, pushToRoot }) => (
  <FullScreenCard onClick={pushToRoot}>
    <Title>{t('aboutCard.heading')}</Title>
    <Description>
      {content[locale].map((p, i) => <p key={i}>{p}</p>)}
    </Description>
    <SubTitle>Команда проекта</SubTitle>
    <CompaniesContainer>
      <Company>
        <CompanyName>Музей истории ГУЛАГа</CompanyName>
        <Position>Руководитель проекта</Position>
        <Name>Роман Романов</Name>
        <Position>Научные сотрудники</Position>
        <Name>
          Илья Удовенко, Татьяна Полянская, Артём Латышев, Галина Иванова
        </Name>
        <Position>Кураторы карты</Position>
        <Name>Ирина Неустроева, Елена Солозобова, Анна Кондратьева</Name>
        <Position>Консультант</Position>
        <Name>Константин Коновалов</Name>
        <Position>Редакто</Position>
        <Name>Анна Нуруллина</Name>
        <Position>Переводчик</Position>
        <Name>Дмитрий Белановский</Name>
      </Company>
      <Company>
        <CompanyName>Урбика</CompanyName>
        <Name>Анна Баринова</Name>
        <Name>Андрей Бахвалов</Name>
        <Name>Константин Гордеев</Name>
        <Name>Татьяна Иванникова</Name>
        <Name>Антон Ивченко</Name>
        <Name>Александр Калашников</Name>
        <Name>Андрей Кармацкий</Name>
        <Name>Степан Кузьмин</Name>
        <Name>Тая Лавриненко</Name>
        <Name>Анастасия Потехина</Name>
      </Company>
    </CompaniesContainer>
    <Description>
      <div>
        Благодарим за помощь в поиске информации и предоставлении архивных
        документов и фотографий:
      </div>
      <div>
        Международное историко-просветительское, благотворительное и
        правозащитное общество «Мемориал»
      </div>
      <div>
        Юрия Дмитриева, руководителя Карельского отделения отделения
        Международного «Мемориала»
      </div>
      <div>
        Виктора Паасо, Карельское республиканское общественное учреждение НИЦ
        «Мемориал»
      </div>
      <div>
        Михаила Рогачева, Коми республиканский благотворительный общественный
        фонд жертв политических репрессий «Покаяние»
      </div>
      <div>
        Алексея Захарченко, Самарский филиал Московского городского
        педагогического университета
      </div>
      <div>Светлана Березовская, Музей города Северска</div>
      <div>Василия Ханевича, Мемориальный музей «Следственная тюрьма НКВД»</div>
      <div>Музей «Город на Севере России» (Воркута)</div>
      <div>Кемский краеведческий музей «Поморье»</div>
      <div>Городской краеведческий музей города Лабытнанги</div>
      <div>
        Ямало-ненецкий окружной музейно-выставочный комплекс им.
        И.С.Шемановского (Салехард)
      </div>
      <div>Музейный центр города Сегежи</div>
      <div>Историко-краеведческий мемориальный музей города Сосногорска</div>
      <div>Народный музей Сусумана</div>
      <div>Национальный музей Республики Коми</div>
      <div>Музей истории политических репрессий в Туве</div>
      <div>Музей «Память Колымы» (поселок Ягодное)</div>
      <div>Музей туристического клуба «Лидер» (Республика Саха)</div>
      <div>
        Проект реализован с использованием гранта Президента Российской
        Федерации на развитие гражданского общества, предоставленного Фондом
        президентских грантов
      </div>
    </Description>
    <Link href='mailto:mail@gulagmap.ru'>mail@gulagmap.ru</Link>
    <Footer>
      <a
        href='https://президентскиегранты.рф/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src={pgrants} alt='' />
      </a>
      <a href='http://gmig.ru/' target='_blank' rel='noreferrer noopener'>
        <img src={img.ru} alt='' />
      </a>
      <a href='http://urbica.co/' target='_blank' rel='noreferrer noopener'>
        <img src={urbica} alt='URBICA' />
      </a>
    </Footer>
  </FullScreenCard>
);

About.propTypes = {
  locale: PropTypes.string.isRequired,
  pushToRoot: PropTypes.func.isRequired
};

export default About;
