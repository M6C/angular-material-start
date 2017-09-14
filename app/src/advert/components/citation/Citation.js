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
                    {message:'L\'enfance est une douce �poque � laquelle on souhaite g�n�ralement revenir', author: ''},
                    {message:'Cette p�riode de nos vies correspond � l\'�veil au monde et � sa propre conscience', author: ''}
                ],
                [ // Contact
                    {message:'Le contact humain est le v�hicule essentiel de la d�mocratie', author: 'Jacques Chirac'},
                    {message:'C\'est au contact d\'autrui que l\'homme apprend ce qu\'il sait.', author: 'Euripide'}
                ],
                [ // Adresse
                    {message:'Pour rentrer chez vous, une seule adresse, la v�tre !', author:'Francis Blanche'},
                    {message:'L\'adresse n?est autre chose qu?une juste dispensation des forces que l?on a.', author:'Francis Blanche'}
                ],
                [ // Annonce
                    {message:'Le printemps s\'annonce toujours rempli de promesses... sans jamais nous mentir, sans jamais d�faillir.', author:'Michel Bouthot'},
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