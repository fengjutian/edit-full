import Image from 'next/image';
import MyEdit from './MyEdit';
import Tools from './Tools/Tools';
import './page.css';

export default function Home() {
  return (
    <div className='display-wrap'>
      <Tools/>
      <div className='edit-wrap'>
        <MyEdit/>
      </div>
    </div>
  )
}
