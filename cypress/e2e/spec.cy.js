describe('API test', () => {
  it('POST call', () => {
  
    cy.fixture('example.json').then((data)=>{
      const randomDate = Date.now().toString();
                  data.name = `Jahnu${randomDate}`;
                  data.email = `a${randomDate}@gmail.com`;
           
      cy.postUser(data).then(response=>{
        const userId = response.body.id 
      cy.getUser(userId,data).then(response=>{
      cy.deleteUser(userId).then(response =>{
          expect(response.status).to.be.eq(204)
              
          
          
            
            
            

            

              
            })
                
            })
        })
      })
      
    })
  
  })
