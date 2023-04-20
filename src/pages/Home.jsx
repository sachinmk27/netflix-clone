import React from 'react';
import JumbotronContainer from '../containers/Jumbotron';
import FAQsContainer from '../containers/FAQs';
import FooterContainer from '../containers/Footer';
import HeaderContainer from '../containers/Header';
import { OptForm, Feature } from '../components';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
export default Home;
