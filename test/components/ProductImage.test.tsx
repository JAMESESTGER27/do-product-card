import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://i.ibb.co/cvpntL1/hats.png" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
