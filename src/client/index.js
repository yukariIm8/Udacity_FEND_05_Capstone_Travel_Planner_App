import { performAction } from './js/app'

import './styles/layout.scss'
import './styles/header.scss'
import './styles/search.scss'
import './styles/trip.scss'
import './styles/top-button.scss'
import './styles/footer.scss'

// Add event listner to the generate button.
document.getElementById('plan').addEventListener('click', performAction);

export {
    performAction
}