let carousel = new Vue({
    el: "#app",
    data: {
        activeClass: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'La Svezia posta nel cuore della Scandinavia, può essere considerata come una stupenda realtà nordica, resa caratteristica da meravigliosi paesaggi naturali, città incantevoli e ricche di cultura, posti selvaggi e pittoreschi. Per tutto questo e molto altro ancora la Svezia ogni anno attira un gran numero di turisti.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Il suo territorio è quasi tutto montuoso. Si possono individuare tre grandi regioni: l-area alpina, nella parte meridionale del Paese; la fascia alpina degli altipiani, nella regione centrale; la catena del Giura, a occidente. Il settore alpino copre circa il 60% del territorio.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Ogni angolo della Gran Bretagna nasconde un patrimonio artistico e culturale. E un paese antico, dalle grandi contraddizioni: le tradizioni si mescolano alla modernità e al dinamismo influenzando ancora il mondo intero con i propri stili di vita, la musica, la moda e le numerose opportunità per i giovani.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Nel cuore dell Europa, la Germania possiede meraviglie naturali veramente sorprendenti per bellezza e varietà dei paesaggi. Questi luoghi riusciranno ad affascinare tutti gli amanti della natura e anche i più esperti viaggiatori.',
            },
            {
                image: 'img/05.jpg',
                title: 'Maldive',
                text: 'Le Maldive sono un magnifico arcipelago di isole e atolli situato nell’Oceano Indiano e rappresentano una delle mete turistiche più ambite e amate al mondo. Il loro incantevole clima e il loro paesaggio mozzafiato attirano infatti ogni anno un ingente flusso turistico. Gli splendidi atolli delle Maldive rappresentano il luogo ideale per rilassarsi e godersi il sole e il mare pulito e cristallino che lambisce alcune delle spiagge più belle al mondo.',
            },
        ],
    },
    methods: {
        nextSlide: function(){
            if (this.activeClass === this.slides.length - 1){
                this.activeClass = 0;
            } else {
                this.activeClass++;
            }
        },
        prewSlide: function(){
            if(this.activeClass === 0) {
                this.activeClass = this.slides.length - 1;
            } else {
                this.activeClass--;
            }
        },
    }
});


