import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = () =>shallow(<App/>);
const mytest= (wrapper, value)=>wrapper.find(`[data-test="${value}"]`)

test('renders without error', () => {
  const wrapper = setup();
  const appcomponent = mytest(wrapper,'component-app')
  expect(appcomponent.length).toBe(1);
});
test('counter value display', () => {
  const wrapper = setup();
  const counterDisplay = mytest(wrapper,'counter-display')
  expect(counterDisplay.length).toBe(1);
});
test('counter start at 0', () => {
  const wrapper = setup();
  const count = mytest(wrapper,'count').text()
  expect(count).toBe("0");
});

describe('Increment', ()=>{
  test('render increment Button',()=>{
    const wrapper = setup();
    const IncrementButton = mytest(wrapper,'increment-button')
    expect(IncrementButton.length).toBe(1)
  })

  test('check click increment counter', ()=>{
    const wrapper = setup();
    const button = mytest(wrapper,'increment-button')
    button.simulate('click')
    const count = mytest(wrapper,'count').text()
    expect(count).toBe("1")

    
  })


})


describe('decrement', ()=>{
  /// check count
  test('check count', ()=>{
    const wrapper = setup();
    const count = mytest(wrapper, 'count').text()
    expect(count).toBe("0")
  })

  ///render decrement button
  test('render decement button', ()=>{
    const wrapper = setup();
    const decrementButton = mytest(wrapper, 'decrement-button');
    expect(decrementButton.length).toBe(1)
  })


  // render decrement button
    test('render decrement button', ()=>{
      const wrapper = setup()
      const decrementButton = mytest(wrapper, 'decrement-button')
      decrementButton.simulate('click');
      const count = mytest(wrapper, 'count').text();
      expect(count).toBe("0")
    })

})

describe('check error messaage', ()=>{
   
 test('render error message', ()=>{
   const wrapper = setup()
   const decrementButton = mytest(wrapper, 'decrement-button')
   decrementButton.simulate('click');
  
    const errorMessage = mytest(wrapper, 'error-message').text()
    expect(errorMessage).toBe("Error")
  })

  test('decrement error red color', ()=>{
    const wrapper = setup()
   const decrementButton = mytest(wrapper, 'decrement-button')
   decrementButton.simulate('click');
   const errorMessage = mytest(wrapper, 'error-message');
     const errorClass = errorMessage.hasClass('error1')
     expect(errorClass).toBe(false)
   })

   test('increment error red color', ()=>{
    const wrapper = setup()
    const IncrementButton = mytest(wrapper, 'increment-button')
    IncrementButton.simulate('click');
   
     const errorMessage = mytest(wrapper, 'error-message');
     const errorClass = errorMessage.hasClass('hidden')
     expect(errorClass).toBe(true)
   })
 
})
