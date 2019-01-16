import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { animated, Transition } from 'react-spring';

import TeamSelector from './TeamSelector';

const CloseButton = styled.div`
  color: white;
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

const OverlayWrapper = styled(animated.div)`
  position: absolute;
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OverlayContent = styled.div``;

const OptionsListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AboutText = styled.div`
  font-size: 16px;
  text-align: center;
  color: white;
  font-family: 'Fugaz One', cursive;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin-left: 5px;
  text-decoration: unset;
  color: #5edea4;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
`;

const OptionsItem = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'Fugaz One', cursive;
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const OptionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionLabel = styled.span`
  font-size: 15px;
  color: #5edea4;
  font-family: 'Fugaz One', cursive;
  text-transform: uppercase;
  margin-right: 20px;
`;

const OptionToggle = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'Fugaz One', cursive;
  text-transform: uppercase;
  cursor: pointer;
`;

const OptionsOverlay = ({
  toggleOptionsOverlay,
  showOptionsOverlay,
  favoriteTeam,
  setFavoriteTeam,
}) => {
  const [showOptions, toggleOptions] = useState(false);
  const [showAbout, toggleAbout] = useState(false);
  const [showContact, toggleContact] = useState(false);
  const [showSelect, toggleSelect] = useState(false);
  const handleItemClick = (e, key) => {
    e.stopPropagation();
    if (key === 'options') {
      toggleOptions(true);
      toggleAbout(false);
      toggleContact(false);
    } else if (key === 'about') {
      toggleOptions(false);
      toggleAbout(true);
      toggleContact(false);
    } else if (key === 'contact') {
      toggleOptions(false);
      toggleAbout(false);
      toggleContact(true);
    }
  };
  const handleClose = () => {
    toggleOptions(false);
    toggleAbout(false);
    toggleContact(false);
    toggleSelect(false);
    toggleOptionsOverlay(!showOptionsOverlay);
  };

  const handleSelect = item => {
    setFavoriteTeam('favoriteTeam', item.short);
    toggleSelect(false);
  };

  return (
    <Transition
      native
      items={showOptionsOverlay}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {showOptionsOverlay =>
        showOptionsOverlay &&
        (styles => (
          <OverlayWrapper style={{ ...styles }}>
            <CloseButton onClick={() => handleClose()}>X</CloseButton>
            <OverlayContent>
              {showAbout && (
                <React.Fragment>
                  <AboutText>
                    This app is a hobby project created by Wataru Kay.
                  </AboutText>
                  <AboutText>
                    The code is open sourced
                    <Link href="https://github.com/WataruKay/HoopFeed">
                      here
                    </Link>
                    .
                  </AboutText>
                  <AboutText>
                    To learn more about the background of the project, check out
                    this{' '}
                    <Link href="https://medium.com/@watarukay/what-i-learned-working-on-the-same-side-project-a-second-time-22c35043a36a">
                      article
                    </Link>
                    .
                  </AboutText>
                </React.Fragment>
              )}
              {showContact && (
                <AboutText>
                  Contact me at <Link>watarukay@gmail.com</Link>
                </AboutText>
              )}
              {showOptions && (
                <OptionSection>
                  <Option>
                    <OptionLabel>Favorite Team</OptionLabel>
                    {!showSelect && (
                      <OptionToggle onClick={() => toggleSelect(true)}>
                        {favoriteTeam ? favoriteTeam : 'Not Set'}
                      </OptionToggle>
                    )}
                    {showSelect && (
                      <TeamSelector
                        selected={favoriteTeam ? favoriteTeam : 'Not Set'}
                        onSelect={item => handleSelect(item)}
                      />
                    )}
                  </Option>
                </OptionSection>
              )}
              {!showAbout &&
                !showOptions &&
                !showContact && (
                  <OptionsListWrapper>
                    <OptionsItem onClick={e => handleItemClick(e, 'options')}>
                      Options
                    </OptionsItem>
                    <OptionsItem onClick={e => handleItemClick(e, 'about')}>
                      About
                    </OptionsItem>
                    <OptionsItem onClick={e => handleItemClick(e, 'contact')}>
                      Contact
                    </OptionsItem>
                  </OptionsListWrapper>
                )}
            </OverlayContent>
          </OverlayWrapper>
        ))
      }
    </Transition>
  );
};

export default OptionsOverlay;
