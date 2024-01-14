import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#FF6363',
                'secondary': {
                    100: '#E2E2D5',
                    200: '#888883'
                }
            },
            fontFamily: {
                'body': ['Nunito']
            }
        }
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}