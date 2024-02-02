Cypress.Commands.add('postUser',(data)=>{
    cy.request({
        method: "POST",
        url: "/",
        headers: {
            Authorization: Cypress.env("token")
        },
        body: data
      
      }).then(response=>{
        expect(response.body.name).to.be.eq(data.name)
         expect(response.body.email).to.eq(data.email)
      
      })
})
Cypress.Commands.add('getUser',(userId,data)=>{
    cy.request({
        method: 'GET',
        url: `/${userId}`,
        headers: {
          Authorization: Cypress.env("token")
      },
      }).then(response=>{
            expect(response.body.name).to.eq(data.name)
            expect(response.body.email).to.eq(data.email)
            expect(response.body.id).to.eq(userId)
      })
    })
Cypress.Commands.add('deleteUser',(userId)=>{
    cy.request({
        method: 'DELETE',
        url: `/${userId}`,
        headers: {
          Authorization: Cypress.env("token")
      },
      
    })
    })
