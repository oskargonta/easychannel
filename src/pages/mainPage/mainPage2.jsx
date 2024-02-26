import React from "react";

import { Button, Img, Line, List, Text } from "components";

const MainPage2 = () => {
  return <div className="body">
    <div className="container">
    <header className="header">
      <div className="logo">
        <Img
        className="h-5 w-[145px]"
          src="images/img_frame80.svg"
          alt="frameEighty"
        //   onClick={() => setMenuOption("Home")}
        />
        <div className="">
          <Text
            className="text-[15px] text-blue-50 w-auto"
          >
            Home
          </Text>
        </div>
      </div>
      <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <Button
            // onClick={() => {setMenuOption("Register")}}
            className="!text-teal-900 cursor-pointer font-semibold h-10 leading-[normal] min-w-[122px] shadow-bs1 text-[13px] text-center">
            Zaloguj się
          </Button>
        </div>
      </div>
    </header>
        <div className="registerContainer">
            <div className="registerInfo">
            <Text 
                className="registerInfoText"
                size="txtNotoSansBold45">
                          Maksymalizuj potencjał, <br />minimalizuj trudy używając <br />
                  Channel Manager
            </Text>
            <Text className="registerInfo2Text">Chcesz skuteczniej promować swoje obiekty, ale nie masz czasu na rejestrację na wielu portalach i zarządzanie danymi? Easychannel to rozwiązanie dla ciebie! Prosto, bezproblemowo, ekonomicznie: wysoka liczba rezerwacji, doskonałe wsparcie, bezpłatna rejestracja, brak miesięcznych opłat i niska prowizja. Skontaktuj się z nami już teraz!</Text>
            </div>
            <div className="registerForm">
                registerForm
            </div>
        </div>
        <div className="howItWorks">
            <div className="howItWorksContent">
                <Text className="whiteFont">Jak to działa?</Text>
                <div className="howItWorksBlockContainer">
                    <div className="howItWorksBlock">
                        <Button className=" ButtonPoint">
                            1
                        </Button>
                            <Text className="ContentTitle">Skontaktuj się z nami</Text>
                                <div className="HowItWorksContainerContent">
                                    <Text>Udostępniamy obiekty na wszystkie portale
                                    do bezpośredniej rezerwacji online po weryfikacji.</Text>
                                </div>
                        
                    </div>

                    <div className="howItWorksBlock">
                        <Button className=" ButtonPoint">
                            2
                        </Button>
                            <Text className="ContentTitle">Załóż konto</Text>
                                <div className="HowItWorksContainerContent">
                                    <Text>Wprowadź dane swoich obiektów zdjęcia, opisy, ceny, kalendarz dostępności.</Text>
                                </div>
                    </div>

                    <div className="howItWorksBlock">
                        <Button className=" ButtonPoint">
                            3
                        </Button>
                                <Text className="ContentTitle">Zarządzaj rezerwacjami</Text>
                                    <div className="HowItWorksContainerContent">
                                        <Text>Udostępniamy obiekty na wszystkie portale do bezpośredniej
                                        rezerwacji online po weryfikacji.</Text>
                                    </div>
                    </div>

                    <div className="howItWorksBlock">
                            <Button className=" ButtonPoint">
                            4
                            </Button>
                                <Text className="ContentTitle">Stała niska prowizja</Text>
                                    <div className="HowItWorksContainerContent">
                                        <Text>Prowizja od rezerwacji bez miesięcznych opłat dla wszystkich</Text>
                                        zewnętrzych portali - 12%!!!
                                    </div>
                    </div>
                </div>         
            </div>
        </div>
        <div className="IntegrationServicesContainer">
                <div>
                    <Text className="IntegrationTittle">Nasze integracje z zewnętrznymi serwisami</Text>
                    <Text className="IntegrationScope">Współpracujemy z kluczowymi platformami rezerwacyjnymi. Ponieważ
                          nieustannie poszerzamy nasze grono, jeśli nie znajdziecie Państwo
                          swojego poszukiwanego portalu, serdecznie zachęcamy do
                          bezpośredniego kontaktu z nami!
                    </Text>
                </div>
            </div>
        <div className="">       
        <List
              className="IcoList"
              orientation="vertical"
            >
              <div className="">
                <div className="">
                  <Img
                    className="h-[47px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logofewodirekt847500fe.png"
                    alt="logofewodirektEight"
                  />
                </div>
                <div className="">
                  <Img
                    className="h-[54px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logotuivillasa6a164b6.png"
                    alt="logotuivillasaSix"
                  />
                </div>
                <div className="">
                  <Img
                    className="h-[33px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logobookingdafd046f.png"
                    alt="logobookingdafd"
                  />
                </div>
                <div className="">
                  <Img
                    className="h-[37px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logoholidud9d53227.png"
                    alt="logoholidud9dFiftyThree"
                  />
                </div>
                <div className="">
                  <Img
                    className="h-[68px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logohometogo20218b6cc88e.png"
                    alt="logohometogo202"
                  />
                </div>
                <Img
                  className="h-[72px] w-[165px]"
                  src="images/img_frame22.svg"
                  alt="frameTwentyTwo"
                />
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="">
                <div className="">
                  <Img
                    className="h-[33px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logoedomizil25e5cbbd.png"
                    alt="logoedomizil25e"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[37px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logohomeaway8b82e80e.png"
                    alt="logohomeaway8bEight"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[66px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logoferienwohn.png"
                    alt="logoferienwohn"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-10 md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logohrsholidaysfc6ade9c.png"
                    alt="logohrsholidays"
                  />
                </div>
                <div className="">
                  <Img
                    className="h-[51px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logotravanto2717e12f.png"
                    alt="logotravanto271"
                  />
                </div>
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame23.svg"
                  alt="frameTwentyThree"
                />
              </div>
            </List>
        </div>

        <div className="CooperationProfit">
            <div>
                <Text className="CoTittle"></Text>
                Korzyści współpracy z nami
                <div className="CoContainer">
                    DUPAPDSKFDFKSDGFWKFEWODFKWOEQKWOKFEEWQKFKOWEOKFEAWQ

                </div>
            </div>

        </div>
    </div>
    </div>
}

export default MainPage2;