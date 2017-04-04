
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: false,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text:{name:"New beginnings"},
            HTMLclass:"beginnings",
            collapsed:true,
            children: [
                {
                    text:{name:"Student Living"},
                    collapsed: true,
                    stackChildren:true,
                    children: [
                            {image: "http://www.mcgilltribune.com/wp-content/uploads/2017/04/Flaminia-Cooper-New-Beginning-150x150.jpg"},
                            {image:"img/a.jpg"},             
                            {image: "img/a.jpg"},
                            {image:"img/a.jpg"}
                    ]
                },
                {
                    text:{name:"SciTech"},
                    collapsed:true,
                    childrenDropLevel:1,
                    children: [
                        {
                            text:{name:"McGill alumnus develops one-handed surgical knot-tying method"},
                            image: "http://www.mcgilltribune.com/wp-content/uploads/2017/04/Knot-tying-RCS-final-150x150.jpg"
                        }
                    ]
                },
                {
                    text:{name:"Sports"},
                    collapsed:true,
                    children: [
                        {
                            text:{name:"Athletics Awards"},
                            image: "http://www.mcgilltribune.com/wp-content/uploads/2017/04/baseball.jpg"
                        }
                    ]
                },
                {
                    text:{name:"News"},
                    collapsed:true,
                    stackChildren:true,
                    children:[
                            {   text:{name:"SSMU end-of-year reviews"},
                                link:{href:"http://google.com", target:"_blank"},
                                image:"http://www.mcgilltribune.com/wp-content/uploads/2014/02/ssmu2.WendyChen.online-110x110.jpg"},
                            {text:{name:"PGSS end-of-year reviews"},
                                image:"http://www.mcgilltribune.com/wp-content/uploads/2014/03/thompsonhouse.WendyChen.online-110x110.jpg"},
                            {image:"img/a.jpg"}
                    ]
                },
                {
                    text:{name:"Opinion"},
                    collapsed:true,
                    children:[
                        {
                            text:{name:"Lighten up, it's just McGill"},
                            image: "http://www.mcgilltribune.com/wp-content/uploads/2013/01/flood.SimonPoitrimolt.online1-110x110.jpg"
                        }
                    ]
                },
                {
                    text:{name:"Arts & Entertainment"},
                    collapsed:true,
                    childrenDropLevel: 1,
                    children:[
                        {
                            text:{name:"Printemps Numerique at the McCord Museum"},
                        image: "http://www.mcgilltribune.com/wp-content/uploads/2017/04/HannahTaylor_McCord_online2-150x150.jpg"
                        }
                    ]
                }
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/a.jpg"
    },

    lana = {
        parent: malory,
        image: "ima.jpg"
    }

    figgs = {
        parent: lana,
        image: "imga.jpg"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sta.jpg"
    },

    woodhouse = {
        parent: sterling,
        image: "img/wooa.jpg"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/a.jpg"
    },

    pam = {
        parent: pseudo,
        image: "ia.jpg"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/