import './App.css'
import { CustomInput } from './components/CustomInput/CustomInput'
import { useForm } from 'react-hook-form'
import { useState,useEffect } from 'react';
import { CustomSelect } from './components/CustomSelect/CustomSelect';

function App() {

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_gate')
  .then((response) => response.json())
  .then((data) => console.log(data));

  
    return () => {
      
    }
  }, [])
  
  
  const [submitted, setSubmitted] = useState();
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      status: 'all',
      plant: 'all',
      product: 'all',
      gateNo: 'all',
      itemNo: '',
      supplierName: '',
      poNo: '',
      doNo: '',


    }
  });
  //const { register, handleSubmit ,formState: { errors }} = useForm();

  const doSubmit = (data) => {
    setSubmitted(data)
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Test GR mornitoring</h1>
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className='row-input'>
          <CustomSelect
            name='status'
            label='Status:'
            {...register('status')}
            options={[
              { value: "all", label: "All" },
              { value: "back order", label: "Back Order" },
              { value: "on time", label: "On Time" }
            ]}
          />
          <CustomSelect
            name='plant'
            label='Plant:'

            {...register('plant')}
            options={[
              { value: "all", label: "All" },
              { value: "skca", label: "SKCA" },
              { value: "on time", label: "On Time" }
            ]}
          />
          <CustomSelect
            name='product'
            label='Product:'
            {...register('product')}
            options={[
              { value: "all", label: "All" },
              { value: "skca", label: "SKCA" },
              { value: "on time", label: "On Time" }
            ]}
          />
          <CustomSelect
            name='gateNo'
            label='Gate No:'
            {...register('gateNo')}
            options={[
              { value: "all", label: "All" },
              { value: "skca", label: "SKCA" },
              { value: "on time", label: "On Time" }
            ]}
          />
          <CustomInput
            name='doFrom'
            label='DO From:'
            {...register('doFrom')}
            type='date'
          />
          <CustomInput
            name='doTo'
            label='DO To:'
            {...register('doTo')}
            type='date'
          />
        </div>
        <div className='row-input'>
          <CustomInput
            name='poFrom'
            label='PO From:'
            {...register('poFrom')}
            type='date'
          />
          <CustomInput
            name='poTo'
            label='PO To:'
            {...register('poTo')}
            type='date'
          />
          <CustomInput
            name='itemNo'
            label='Item Number:'
            {...register('itemNo')}
            type='number'
          />
          <CustomInput
            name='supplierName'
            label='Supplier Name:'
            {...register('supplierName')}
          />
          <CustomInput
            name='poNo'
            label='PO#:'
            {...register('poNo')}
          />
          <CustomInput
            name='doNo'
            label='DO#:'
            error={errors.doNo}
            {...register('doNo', { maxLength: { value: 5, message: 'DO# is longer than actual.' } })}
          />

        </div>
        <div className='row-input'>
          <button type='submit' className='btn-green'>Search</button>
          <button type='reset' className='btn-red'>Cancel</button>
        </div>
        {submitted && (
          <div>
            Submitted Data:
            <br />
            {JSON.stringify(submitted)}
          </div>
        )}

      </form>
    </div>
  )
}

export default App
