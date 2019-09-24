import styled from 'styled-components';
import onboardingBG from '../../img/onboarding-bg.jpg';

export const Onboarding = styled.main`
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    background: rgba(0, 0, 0, .5);
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  form {
    padding: 4rem 3rem;
    min-height: 350px;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    z-index: 5;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-header {
      text-align: center;
      margin-bottom: 4rem;

      h1 {
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        color: rgba(0,0,0,.4);
      }

      p {
        margin-top: .5rem;
        font-size: 3rem;
        font-weight: 600;
      }
    }

    .form-inputs {
      display: flex;
      flex-direction: column;
      margin-bottom: 2.5rem;
      width: 100%;

      &:last-of-type {
        margin-bottom: 3rem;
      }

      label {
        font-size: 1.3rem;
        margin-bottom: .5rem;
        font-weight: 600;
        color: rgba(0,0,0,.4);
      }

      input {
        outline: none;
        border: 1px solid #ddd;
        padding: 0 1rem;
        min-height: 40px;
        border-radius: 5px;
        font-size: 1.4rem;
        background: transparent;

        &:-webkit-autofill { 
          -webkit-box-shadow:200px 200px 100px white inset; 
          box-shadow:200px 200px 100px white inset; 
        }

        &:focus {
          border: 1px solid #419BA0;
        }
      }

      .error-msg {
        margin-top: .5rem;
        color: red;
      }
    }

    button {
      outline: 0;
      border: none;
      background: #419BA0 none;
      color: #fff;
      font-weight: 700;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
      user-select: none;
      transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
      -webkit-tap-highlight-color: transparent;
      padding: .5rem 2rem;
      min-height: 40px;
      min-width: 200px;
      font-size: 1.5rem; 
      margin-top: 2rem;

      &:hover {
        background-color: #63ADB1;
        background-image: none;
        -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        color: rgba(255, 255, 255, .8);
      }
    }

    .text-link {
      margin-top: 3rem;
      font-size: 1.2rem;
      text-align: center;
      color: rgba(0,0,0,.4);  

      a {
        text-decoration: none;
        color: #419BA0;
        font-weight: 600;
      }
    }
  }

  .hero-background {
    z-index: 1;
    position: fixed;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${onboardingBG});
  }
`