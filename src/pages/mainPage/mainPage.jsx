import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Register from "pages/register/register";

const MainPage = () => {
  return (
    
    <>
        <div className="container w-[80%]"> 
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1120px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-10 items-start justify-start max-w-[643px] w-full">
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[52.00px] sm:text-[35px] md:text-[41px] text-[45px] text-teal-900"
                  size="txtNotoSansBold45"
                >
                  <>
                  Maksymalizuj potencjał, <br />minimalizuj trudy używając <br />
                  Channel Manager
                  </>
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[643px] md:max-w-full text-[15px] text-gray-800"
                  size="txtNotoSansRegular15"
                >
                  Zapewniamy kompleksowe rozwiązanie dla obiektów noclegowych, 
                  umożliwiając zarządzanie rezerwacjami, cenami i dostępnością miejsc noclegowych na różnych portalach online. 
                  Umożliwiamy integrację obiektu z popularnymi stronami rezerwacyjnymi, 
                  takimi jak Booking.com, Airbnb, Expedia czy HRS, co znacznie zwiększa widoczność obiektu i liczbę rezerwacji.
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button className="!text-teal-900 cursor-pointer font-semibold h-10 leading-[normal] min-w-[120px] shadow-bs1 text-[13px] text-center">
                  Napisz do nas
                </Button>
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[10px] shadow-bs1 w-auto">
                  <Text
                    className="text-[13px] text-teal-900 underline w-auto"
                    size="txtNotoSansSemiBold13"
                  >
                    Załóż bezpłatne konto
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-full">
              <Img
                className="h-5 w-5"
                src="images/img_infoblack24dp.svg"
                alt="infoblack24dp"
              />
              <Text
                className="text-[13px] text-gray-800 w-auto"
                size="txtNotoSansRegular13"
              >
                Założenie konta daje mozliwość zobaczenia naszej aplikacji. Nic
                Cię to nie kosztuje.
              </Text>
            </div>
          </div>
          <Register />
          {/* <div className="bg-blue_gray-100 h-[418px] rounded-[10px] w-[41%]"></div> */}
        </div>
        <div className="bg-teal-900 flex flex-col md:gap-10 gap-[60px] items-start justify-start md:px-10 px-40 sm:px-5 py-[120px] w-auto md:w-full">
          <Text
            className="sm:text-[33px] md:text-[35px] text-[37px] text-white-A700 w-auto"
            size="txtNotoSansBold37"
          >
            Jak to działa?
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1120px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Button className="cursor-pointer font-bold h-10 leading-[normal] rounded-lg text-base text-center w-10">
                1
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-[263px]">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtNotoSansBold20"
                >
                  Skontaktuj się z nami
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[263px] md:max-w-full text-[15px] text-blue-100"
                  size="txtNotoSansRegular15Blue100"
                >
                  Udostępniamy obiekty na wszystkie portale do bezpośredniej
                  rezerwacji online po weryfikacji.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[262px]">
              <Button className="cursor-pointer font-bold h-10 leading-[normal] rounded-lg text-base text-center w-10">
                2
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtNotoSansBold20"
                >
                  Załóż konto
                </Text>
                <Text
                  className="leading-[22.00px] text-[15px] text-blue-100"
                  size="txtNotoSansRegular15Blue100"
                >
                  <>
                    Wprowadź dane swoich obiektów
                    <br />
                    zdjęcia, opisy, ceny, kalendarz dostępności.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[261px]">
              <Button className="cursor-pointer font-bold h-10 leading-[normal] rounded-lg text-base text-center w-10">
                3
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtNotoSansBold20"
                >
                  Zarządzaj rezerwacjami
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[261px] md:max-w-full text-[15px] text-blue-100"
                  size="txtNotoSansRegular15Blue100"
                >
                  Automatycznie generowane potwierdzenie rezerwacji przesyłane
                  zarówno do Państwa, jak i do gościa.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[262px]">
              <Button className="cursor-pointer font-bold h-10 leading-[normal] rounded-lg text-base text-center w-10">
                4
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtNotoSansBold20"
                >
                  Stała niska prowizja
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[262px] md:max-w-full text-[15px] text-blue-100"
                  size="txtNotoSansRegular15Blue100"
                >
                  Prowizja od rezerwacji bez miesięcznych opłat dla wszystkich
                  zewnętrzych portali - 12%!!!
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start md:px-10 px-40 sm:px-5 py-[120px] w-auto md:w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-[33px] md:text-[35px] text-[37px] text-teal-900 w-auto"
              size="txtNotoSansBold37Teal900"
            >
              Nasze integracje z zewnętrznymi serwisami
            </Text>
            <Text
              className="leading-[22.00px] max-w-[643px] md:max-w-full text-[15px] text-gray-800"
              size="txtNotoSansRegular15"
            >
              Współpracujemy z kluczowymi platformami rezerwacyjnymi. Ponieważ
              nieustannie poszerzamy nasze grono, jeśli nie znajdziecie Państwo
              swojego poszukiwanego portalu, serdecznie zachęcamy do
              bezpośredniego kontaktu z nami!
            </Text>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start max-w-[1122px] mx-auto w-full">
            <List
              className="flex flex-col gap-[12.5px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-auto">
                  <Img
                    className="h-[47px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logofewodirekt847500fe.png"
                    alt="logofewodirektEight"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-auto">
                  <Img
                    className="h-[54px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logotuivillasa6a164b6.png"
                    alt="logotuivillasaSix"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-auto">
                  <Img
                    className="h-[33px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logobookingdafd046f.png"
                    alt="logobookingdafd"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-auto">
                  <Img
                    className="h-[37px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logoholidud9d53227.png"
                    alt="logoholidud9dFiftyThree"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-auto">
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
              <div className="md:flex-1 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
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
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
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
            <List
              className="flex flex-col gap-[12.5px] items-center w-full"
              orientation="vertical"
            >
              <div className="md:flex-1 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame54.svg"
                  alt="frameFiftyFour"
                />
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame53.svg"
                  alt="frameFiftyThree"
                />
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-16 md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logotrendferi.png"
                    alt="logotrendferi"
                  />
                </div>
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame50.svg"
                  alt="frameFifty"
                />
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame48.svg"
                  alt="frameFortyEight"
                />
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[66px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logoreiseuhu35e35f80.png"
                    alt="logoreiseuhu35e"
                  />
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="md:flex-1 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame37.svg"
                  alt="frameThirtySeven"
                />
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[55px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logofocusonline2d41e220.png"
                    alt="logofocusonline"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[15px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logobellevuef.png"
                    alt="logobellevuef"
                  />
                </div>
                <Img
                  className="h-[72px] w-full"
                  src="images/img_frame35.svg"
                  alt="frameThirtyFive"
                />
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[66px] md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logovrboa02ad4a5.png"
                    alt="logovrboa02ad4a"
                  />
                </div>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-10 md:h-auto object-cover w-[167px] sm:w-full"
                    src="images/img_logocheck245c489ae3.png"
                    alt="logocheck245cFortyEight"
                  />
                </div>
              </div>
            </List>
            <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full max-w:[80%]">
                <Img
                  className="h-[66px] md:h-auto object-cover w-[167px] sm:w-full"
                  src="images/img_logo9flats84458c01.png"
                  alt="logo9flats84458"
                />
              </div>
              <Img
                className="h-[72px] w-full"
                src="images/img_frame57.svg"
                alt="frameFiftySeven"
              />
              <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                <Img
                  className="h-[42px] md:h-auto object-cover w-[167px] sm:w-full"
                  src="images/img_logotouristonline0bc837bd.png"
                  alt="logotouristonli"
                />
              </div>
              <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                <Img
                  className="h-[66px] md:h-auto object-cover w-[167px] sm:w-full"
                  src="images/img_logovacationr.png"
                  alt="logovacationr"
                />
              </div>
              <div className="flex flex-col h-[72px] md:h-auto items-center justify-center w-full">
                <Img
                  className="h-[55px] md:h-auto object-cover w-[167px] sm:w-full"
                  src="images/img_logofewodeb6e11ef5.png"
                  alt="logofewodeb6eEleven"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amber-700 flex flex-col md:gap-10 gap-[60px] items-start justify-start md:px-10 px-40 sm:px-5 py-[120px] w-auto md:w-full">
          <Text
            className="sm:text-[33px] md:text-[35px] text-[37px] text-gray-900_02 w-auto"
            size="txtNotoSansBold37Gray90002"
          >
            Korzyści współpracy z nami
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1121px] mx-auto w-full">
            <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_settingsblack24dp.svg"
                  alt="settingsblackTwentyFour"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[357px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Automatyzacja pracy
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[357px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Zmiana cen i  dostępności obiektów jednocześnie na ponad 50 portalach
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_signalcellular.svg"
                  alt="signalcellular"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[357px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Zwiększenie sprzedaży
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[357px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Wielokanałowa sprzedaż zwiększa twoje szanse na zdobycie nowych gości
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_webblack24dp1.svg"
                  alt="webblack24dpOne"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[357px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Zarządzanie w jednym miejscu
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[357px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Ten tekst tutaj na dwie linijki proszę rozpisać maksymalnie,
                    żeby wszędzie tak było
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[357px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Oszczędność czasu
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[357px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Jedna umowa umożliwi Ci sprzedaż na wszystkich ważnych portalach
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_todayblack24dp.svg"
                  alt="todayblack24dp"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[359px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Brak dublowania rezerwacji
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[359px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Zawsze aktualny kalendarz przy którym nie musisz martwić się overbookingiem
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_attachmoneyblack24dp.svg"
                  alt="attachmoneyblac"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-[357px]">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtNotoSansBold20Gray90002"
                  >
                    Stała niska prowizja
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[357px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtNotoSansRegular15Gray90003"
                  >
                    Minimalne koszty pobierane tylko od udanej rezerwacji - bez ryzyka
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10  sm:px-5 py-[120px] w-auto md:w-full">
          <div className="bg-teal-900 flex flex-col gap-6 items-center justify-start mx-auto md:px-5 py-20 rounded-[30px] w-full">
            <Img
              className="h-6 w-[174px]"
              src="images/img_frame80.svg"
              alt="frameEighty_One"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="leading-[50.00px] sm:text-[33px] md:text-[35px] text-[37px] text-center text-white-A700"
                size="txtNotoSansBold37"
              >
                <>
                  Nie masz czasu na rejestrację <br />
                  na wielu portalach i zarządzanie danymi?
                </>
              </Text>
              <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                <Text
                  className="leading-[22.00px] max-w-[548px] md:max-w-full text-[15px] text-blue-100 text-center"
                  size="txtNotoSansRegular15Blue100"
                >
                  Easychannel to rozwiązanie dla ciebie. Prosto, bezproblemowo,
                  ekonomicznie! Wysoki poziom rezerwacji, doskonałe wsparcie,
                  bezpłatna rejestracja, brak miesięcznych opłat i niska
                  prowizja.
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-blue-100 w-auto"
                    size="txtNotoSansMedium15Blue100"
                  >
                    Odezwij się do nas:
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_lock.svg"
                      alt="lock_One"
                    />
                    <Text
                      className="text-[15px] text-white-A700 underline w-auto"
                      size="txtNotoSansMedium15WhiteA700"
                    >
                      support@easychannel.pl
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default MainPage;
