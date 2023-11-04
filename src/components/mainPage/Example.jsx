"use client"

import { motion } from "framer-motion"
import HamburgerNavigation from "../modules/component/hamburger/HamburgerNavigation"
import ComponentsContainer from "../modules/stylesMain/ComponentsContainer"

const Example = () => {

  const codeVariants = {
    initial : {
      rotate: 180, 
      y: 5
    },
    hover: {
      scale:1.8, 
      color: "#3d205c", 
      fontWeight: "bold", 
      textTransform: "uppercase", 
      marginLeft: "30px", 
      marginRight: "30px",
      rotate: 0
    }
  }
  return (
    <section className='flex flex-col items-center justify-center text-center py-[30px] px-[10px]'>

      {/* title & desc */}
      <div className='flex flex-col gap-3 cursor-default'>
        <h1 className='text-3xl font-semibold capitalize md:text-5xl '>
          it&apos;s pretty simple to use
        </h1>
        <div className='flex text-xs font-medium md:text-xl'>
          Unleash the power of code! Just hit the 

          {/* animation for "code" */}
          <motion.div 
            variants={codeVariants}
            initial="initial"
            whileHover="hover"
            className="mx-[5px]">
            code
          </motion.div> 
          button to reveal the source code.
        </div>
      </div>

      {/* component */}
      <div className='py-[30px] lg:w-[1000px] xl:w-[1300px] px-[10px] w-full'>
        <ComponentsContainer component={<HamburgerNavigation />} componentName={'Sliding Bottom Hamburger'}/>
      </div>
    </section>
  )
}

export default Example