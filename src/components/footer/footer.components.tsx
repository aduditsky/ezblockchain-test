import { useRef } from 'react';
import { gsap } from 'gsap';
import { ILinksGrid } from './footer.interfaces';
import { socialMedia, pages } from './footer.data';

//Images
import { ReactComponent as EllipseTop } from 'src/images/ellipse-top.svg';
import { ReactComponent as EllipseMid } from 'src/images/ellipse-middle.svg';
import { ReactComponent as EllipseLeft } from 'src/images/ellipse-left.svg';
import { ReactComponent as EllipseRight } from 'src/images/ellipse-right.svg';

//Components
import Button from '../button/button.component';
import FormComponent from '../form/form.components';

//Styles
import {
  ContactData,
  FooterStyles,
  LinksContainer,
  LinkSection,
  FooterData,
  FooterBackground,
} from './footer.styles';

const FooterComponent = () => {
  const footerRef = useRef(null);
  const formRef = useRef(null);

  const elements = gsap.utils.selector(formRef);

  const body = document.body;

  const openFormHandle = (clientHeight: number) => {
    gsap.timeline().to(elements('.container'), {
      paddingLeft: 352,
      duration: 0.33,
      onComplete: () => {
        colorAndBgSync(clientHeight);
      },
    });

    const colorAndBgSync = (clientHeight: number) => {
      gsap
        .timeline()
        .to(formRef.current, {
          background: 'rgba(255,255,255,1)',
          duration: 0.33,
          pointerEvents: 'auto',
          boxShadow: '0 0 15px 2px rgba(0, 0, 0, 0.09)',
        })
        .set(formRef.current, {
          overflow: 'auto',
          opacity: 1,
          onComplete: () => {
            syncAnim(clientHeight);
          },
        });
      gsap.to([elements('.container')], {
        duration: 0.33,
        color: '#398bf5',
        pointerEvents: 'auto',
      });
    };

    const syncAnim = (clientHeight: number) => {
      gsap.to(formRef.current, {
        height: clientHeight + 340,
        y: clientHeight - (clientHeight + 340),
      });
      gsap.to([elements('.form-container')], {
        opacity: 1,
        pointerEvents: 'auto',
        height: 'fit-content',
      });
      gsap.to([elements('.close-button')], {
        opacity: 1,
      });
    };
  };

  const closeFormHandle = (clientHeight: number) => {
    gsap.to([elements('.form-container')], {
      opacity: 0,
      height: 0,
      pointerEvents: 'none',
    });
    gsap.to([elements('.close-button')], {
      opacity: 0,
    });
    gsap.to([elements('.container')], {
      height: 0,
    });
    gsap.to(formRef.current, {
      height: clientHeight,
      y: 0,
      onComplete: () => {
        completeAnim();
      },
    });

    const completeAnim = () => {
      gsap.timeline().to(formRef.current, {
        overflow: 'hidden',
        opacity: 1,
        duration: 0.33,

        onComplete: () => {
          reColorEnd();
        },
      });
    };

    const reColorEnd = () => {
      gsap.to(formRef.current, {
        background: 'rgba(255,255,255,0)',
        duration: 0.33,
        pointerEvents: 'none',
      });
      gsap
        .timeline()
        .to([elements('.container')], {
          color: '#fff',
          boxShadow: 'none',
          duration: 0.33,
          pointerEvents: 'none',
        })
        .to(elements('.container'), {
          paddingLeft: 120,
          background: 'rgba(255,255,255,0)',
          onComplete: () => {
            body.style.overflow = 'auto';
          },
        });
    };
  };

  return (
    <FooterStyles ref={footerRef}>
      <FormComponent
        formRef={formRef}
        closeHandler={() => {
          //@ts-ignore
          const clientHeight = footerRef?.current?.clientHeight;
          closeFormHandle(clientHeight);
        }}
      />

      <FooterData>
        <div>
          <Button
            onClick={() => {
              //@ts-ignore
              const clientHeight = footerRef?.current?.clientHeight;

              console.log({
                clientHeight,
                formHeight: 1.3 * clientHeight,
                y: clientHeight - 1.3 * clientHeight,
              });
              openFormHandle(clientHeight);
            }}
            text={`Contact Us`}
          />
        </div>

        <div style={{ marginTop: 71 - 45 }}>
          <LinkSection>
            {pages && <LinksGrid data={pages} />}
            {socialMedia && <LinksGrid data={socialMedia} />}
          </LinkSection>
        </div>
      </FooterData>
      <ContactData>
        <div>
          EZ Blockchain © 2022 All Rights Reserved
          <br />
          {/* <a href='#'>Terms of service</a> */}
        </div>
        <div>+ 1 (888) 890-15-16</div>
        <div>311 S Wacker Drive, Suite 1410, Chicago, IL 60606</div>
        <div>info@ezblockchain.net</div>
      </ContactData>
      <FooterBackground>
        <EllipseTop className='top' />
        <EllipseMid className='mid' />
        <EllipseLeft className='left' />
        <EllipseRight className='right' />
      </FooterBackground>
    </FooterStyles>
  );
};

export default FooterComponent;

function LinksGrid({ data }: ILinksGrid) {
  return (
    <LinksContainer>
      <h3>{data.title}</h3>

      {data.allLinks && (
        <>
          <div className='container'>
            {data.allLinks.firstCol.length > 0 && (
              <div className='column'>
                {data.allLinks.firstCol.map((item) => (
                  <span key={'data-' + item}>{item}</span>
                ))}
              </div>
            )}
            {data.allLinks.secondCol.length > 0 && (
              <div className='column'>
                {data.allLinks.secondCol.map((item) => (
                  <span key={'data-' + item}>{item}</span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </LinksContainer>
  );
}
