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
                    {message:"CITATION_ENFANCE_01_MESSAGE", author: "CITATION_ENFANCE_01_AUTHOR"},
                    {message:"CITATION_ENFANCE_02_MESSAGE", author: "CITATION_ENFANCE_02_AUTHOR"}
                ],
                [ // Contact
                    {message:"CITATION_CONTACT_01_MESSAGE", author: "CITATION_CONTACT_01_AUTHOR"},
                    {message:"CITATION_CONTACT_02_MESSAGE", author: "CITATION_CONTACT_02_AUTHOR"}
                ],
                [ // Contract
                    {message:"CITATION_CONTRACT_01_MESSAGE", author: "CITATION_CONTRACT_01_AUTHOR"},
                    {message:"CITATION_CONTRACT_02_MESSAGE", author: "CITATION_CONTRACT_02_AUTHOR"}
                ],
                [ // Adresse
                    {message:"CITATION_ADRESSE_01_MESSAGE", author: "CITATION_ADRESSE_01_AUTHOR"},
                    {message:"CITATION_ADRESSE_02_MESSAGE", author: "CITATION_ADRESSE_02_AUTHOR"}
                ],
                [ // Annonce
                    {message:"CITATION_ANNONCE_01_MESSAGE", author: "CITATION_ANNONCE_01_AUTHOR"},
                    {message:"CITATION_ANNONCE_02_MESSAGE", author: "CITATION_ANNONCE_02_AUTHOR"}
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