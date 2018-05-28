import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search will render the correct amount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  );
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});

//  writing xtest/xit/xdescribe will remove the test from running
//  wrting describe with it will run entire blocks of testing with jest/enzyme
