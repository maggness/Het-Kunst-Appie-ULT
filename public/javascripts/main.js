import './easterEggs.js'
import './openHelpText.js'
import './artworkZoom.js'

const installServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/service.js')
    } catch (error) {
      console.error(`Registration failed with ${error}`)
    }
  }
}

installServiceWorker()