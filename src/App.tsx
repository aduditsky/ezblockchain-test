import GlobalStyles from 'src/components/global-styles/global-styles.components';
import styled from 'styled-components';
import FooterComponent from './components/footer/footer.components';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <div style={{ width: '100%', padding: 50, boxSizing: 'border-box' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        recusandae facere, iusto distinctio suscipit ex asperiores repudiandae
        libero porro odio, adipisci veritatis repellendus nisi quas modi laborum
        excepturi voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam in recusandae facere, iusto distinctio suscipit ex
        asperiores repudiandae libero porro odio, adipisci veritatis repellendus
        nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        in recusandae facere, iusto distinctio suscipit ex asperiores
        repudiandae libero porro odio, adipisci veritatis repellendus nisi quas
        modi laborum excepturi voluptas! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam in recusandae facere, iusto distinctio suscipit
        ex asperiores repudiandae libero porro odio, adipisci veritatis
        repellendus nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas!
      </div>

      <div style={{ width: '100%', padding: 50, boxSizing: 'border-box' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        recusandae facere, iusto distinctio suscipit ex asperiores repudiandae
        libero porro odio, adipisci veritatis repellendus nisi quas modi laborum
        excepturi voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam in recusandae facere, iusto distinctio suscipit ex
        asperiores repudiandae libero porro odio, adipisci veritatis repellendus
        nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        in recusandae facere, iusto distinctio suscipit ex asperiores
        repudiandae libero porro odio, adipisci veritatis repellendus nisi quas
        modi laborum excepturi voluptas! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam in recusandae facere, iusto distinctio suscipit
        ex asperiores repudiandae libero porro odio, adipisci veritatis
        repellendus nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas!
      </div>
      <div style={{ width: '100%', padding: 50, boxSizing: 'border-box' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        recusandae facere, iusto distinctio suscipit ex asperiores repudiandae
        libero porro odio, adipisci veritatis repellendus nisi quas modi laborum
        excepturi voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam in recusandae facere, iusto distinctio suscipit ex
        asperiores repudiandae libero porro odio, adipisci veritatis repellendus
        nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        in recusandae facere, iusto distinctio suscipit ex asperiores
        repudiandae libero porro odio, adipisci veritatis repellendus nisi quas
        modi laborum excepturi voluptas! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam in recusandae facere, iusto distinctio suscipit
        ex asperiores repudiandae libero porro odio, adipisci veritatis
        repellendus nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas!
      </div>
      <div style={{ width: '100%', padding: 50, boxSizing: 'border-box' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        recusandae facere, iusto distinctio suscipit ex asperiores repudiandae
        libero porro odio, adipisci veritatis repellendus nisi quas modi laborum
        excepturi voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam in recusandae facere, iusto distinctio suscipit ex
        asperiores repudiandae libero porro odio, adipisci veritatis repellendus
        nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        in recusandae facere, iusto distinctio suscipit ex asperiores
        repudiandae libero porro odio, adipisci veritatis repellendus nisi quas
        modi laborum excepturi voluptas! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam in recusandae facere, iusto distinctio suscipit
        ex asperiores repudiandae libero porro odio, adipisci veritatis
        repellendus nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas!
      </div>
      <div style={{ width: '100%', padding: 50, boxSizing: 'border-box' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        recusandae facere, iusto distinctio suscipit ex asperiores repudiandae
        libero porro odio, adipisci veritatis repellendus nisi quas modi laborum
        excepturi voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam in recusandae facere, iusto distinctio suscipit ex
        asperiores repudiandae libero porro odio, adipisci veritatis repellendus
        nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        in recusandae facere, iusto distinctio suscipit ex asperiores
        repudiandae libero porro odio, adipisci veritatis repellendus nisi quas
        modi laborum excepturi voluptas! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam in recusandae facere, iusto distinctio suscipit
        ex asperiores repudiandae libero porro odio, adipisci veritatis
        repellendus nisi quas modi laborum excepturi voluptas! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ullam in recusandae facere, iusto
        distinctio suscipit ex asperiores repudiandae libero porro odio,
        adipisci veritatis repellendus nisi quas modi laborum excepturi
        voluptas!
      </div>
      <FooterComponent />
    </AppContainer>
  );
}

export default App;
