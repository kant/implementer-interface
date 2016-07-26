import React from 'react';

import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import FormList from 'form-builder/components/FormList';

chai.use(chaiEnzyme());

describe('FormList', () => {
  let wrapper;
  let data = [
    {
      id: 1,
      name: 'Vitals',
      version: 1.1,
      auditInfo: {
        dateCreated: '2010-10-10T15:21:17.000+0530',
        dateChanged: null,
      },
    },
    {
      id: 2,
      name: 'BP',
      version: 1.2,
      auditInfo: {
        dateCreated: '2010-08-09T15:21:17.000+0530',
        dateChanged: '2010-08-12T15:21:17.000+0530',
      },
      status: 'published',
    },
    {
      id: 3,
      name: 'Pulse',
      version: 1.1,
      auditInfo: {
        dateCreated: '2010-08-09T15:21:17.000+0530',
        dateChanged: '2010-08-12T15:21:17.000+0530',
      },
      status: 'published',
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<FormList data={data} />);
  });

  function getData(row, column) {
    return wrapper.find('table').find('tbody').find('tr').at(row).find('td').at(column).text();
  }

  it('should render form list in table', () => {
    expect(wrapper.find('table').find('tbody')).to.have.exactly(3).descendants('tr');

    expect(getData(0, 0)).to.eql('Vitals');
    expect(getData(0, 1)).to.eql('1.1');
    expect(getData(0, 2)).to.eql('10 Oct 10');
    expect(getData(0, 3)).to.eql('');
    expect(getData(0, 4)).to.eql('published');

    expect(getData(1, 0)).to.eql('BP');
    expect(getData(2, 0)).to.eql('Pulse');

    expect(getData(1, 2)).to.eql('09 Aug 10');
    expect(getData(1, 3)).to.eql('12 Aug 10');
  });
});
