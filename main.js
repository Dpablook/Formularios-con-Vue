const app = Vue.createApp({
    data: () => ({
        title: "Formularios",
        // almacenar informacion del Formularios
        datos: {
            name: "",
            age: 1,
            langs: [],
            genero: "M",
        },
    }),
    methods:{
        handleSubmit(){
            console.log(this.datos);
        }
    }
})
