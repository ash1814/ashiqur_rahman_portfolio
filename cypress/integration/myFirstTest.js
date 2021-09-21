///<reference types = "cypress"/>


it('Route Check', function()
{
	
	cy.visit('https://smanager-webstore.dev-sheba.xyz/store/kaliyan-store')



})

it('storeName title check', function()
{

	cy.get('.pointer').contains('কল্যাণ স্টোর')

})

it('Add Product to Cart', function ()
{
	
	cy.get(':nth-child(5) > .product-card > .price-and-add > .add-section > .btn-add').click({ force: true })
	

})

it('productCheckout', function ()
{
	cy.get('.btn-checkout').dblclick({force: true})
	
})

