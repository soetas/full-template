import { build, defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig(()=>{
  return {
    plugins:[
      solid()
    ],
    build:{
      target:'esnext'
    }
  }
})
