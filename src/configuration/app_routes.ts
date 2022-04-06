export default class app_routes{
    //Deklaracja pozycji menu
    static APP_ROUTES() {return [
        {
            icon: "fa fa-dashboard",
            name: "Start",
            url:"/start",
            nested:false,
        },
        {
            icon: "fa fa-id-card-o",
            name: "Oceny",
            url:"/oceny",
            nested:false,
        },
        {
            icon: "fa fa-info",
            name: "Informacje",
            url:"/info",
            nested:false,
        },

    ]}
}
