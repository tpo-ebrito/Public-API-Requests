
'use strict'

const expect = window.chai.expect

describe('meets expectations', () => {
  // before <- this code runs before the tests
  // after <- this code runs after the tests
  // describe <- the thing we are testing
  // context <- under specific circumstances
  // it <- an actual test

  before(() => {
    return loadData()
  })

  describe('user gallery', () => {
    it('must have 12 entries', () => {
      console.log('b')
      const expected = 12
      const actual = document.querySelector('#gallery').children.length

      expect(actual).to.equal(expected)
    })

    describe('each entry', () => {
      it('must be a DIV element', () => {
        const expected = 'DIV'

        document.querySelector('#gallery').children.forEach((child) => {
          const actual = child.tagName
          expect(actual).to.equal(expected)
        })
      })

      it('must have the correct CSS class name', () => {
        const expected = 'card'

        document.querySelector('#gallery').children.forEach((child) => {
          const actual = child.className
          expect(actual).to.equal(expected)
        })
      })

      describe('the card contents', () => {
        let cards = null

        before(() => {
          cards = document.querySelector('#gallery').children
        })

        it('must have the expected children', () => {
          const expected = [
            'DIV.card-img-container',
            'DIV.card-info-container'
          ]

          cards.forEach((card) => {
            const actual = Array.from(card.children).map((child) => {
              return `${child.tagName}.${child.className}`
            })

            expect(actual).to.deep.equal(expected)
          })
        })

        describe('the first child', () => {
          it('must be the expected markup', () => {
            const pattern = /^<img class="card-img" src="https:\/\/randomuser\.me\/api\/portraits\/med\/(men|women)\/\d+\.jpg" alt="profile picture">$/

            cards.forEach((card) => {
              const actual = card.children[0].innerHTML.trim()
              expect(actual).to.match(pattern)
            })
          })
        })
      })
    })
  })
})

describe('exceeds expectations', () => {

})
