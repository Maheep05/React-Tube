import { FC, memo } from 'react'
import { BackIcon } from '../Icons/Icons'
import Input from '../Input/Input'

interface MobileSearchProps {
    active : () => void,
}

const MobileSearch: FC<MobileSearchProps> = memo(({active}) => {
  return (
    <div className='flex flex-row items-center '>
        <div onClick={active}>
        <BackIcon/>
        </div>
        <Input placeholder='Search' inputType='mobile'/>
    </div>
  )
})

export default MobileSearch