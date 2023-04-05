import { scroller } from 'react-scroll';

export const handleNavClick = (id, event) => {
  event.preventDefault(); // prevent the default link/button behavior
  scroller.scrollTo(id, {
    duration: 500,
    smooth: 'smooth',
    offset: -100,
    spy: true,
    hashSpy: true,
    updateUrl: true,
  });
};
