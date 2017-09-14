let component = {
    name : 'citation',
    config : {
        bindings         : { index: '<' },
        templateUrl      : 'src/advert/components/citation/Citation.html',
        controllerAs: '$ctrlCitation',
        controller: function() {
            let self = this;

            self.random = Math.random();
            self.citationList = [
                [ // Enfance
                    {message:'L\'enfance est une douce époque à laquelle on souhaite généralement revenir', author: ''},
                    {message:'Cette période de nos vies correspond à l\'éveil au monde et à sa propre conscience', author: ''}
                ],
                [ // Contact
                    {message:'Le contact humain est le véhicule essentiel de la démocratie', author: 'Jacques Chirac'},
                    {message:'C\'est au contact d\'autrui que l\'homme apprend ce qu\'il sait.', author: 'Euripide'}
                ],
                [ // Adresse
                    {message:'Pour rentrer chez vous, une seule adresse, la vôtre !', author:'Francis Blanche'},
                    {message:'L\'adresse n?est autre chose qu?une juste dispensation des forces que l?on a.', author:'Francis Blanche'}
                ],
                [ // Annonce
                    {message:'Le printemps s\'annonce toujours rempli de promesses... sans jamais nous mentir, sans jamais défaillir.', author:'Michel Bouthot'},
                    {message:'Les petites annonces ont ceci de curieux que les meilleurs emplois se trouvent toujours dans les demandes.', author: ''}
                ]
            ];
        
            self.getCitation = function() {
                let citation = self.citationList[self.index][Math.floor(self.random * 2)];
                self.random = Math.random();
                return citation;
            }
        }
    }
};
export default component;