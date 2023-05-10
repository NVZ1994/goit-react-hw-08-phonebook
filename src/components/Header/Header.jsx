import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { PageContainer } from 'components/pageContainer/pageContainer';
import { HeaderTag } from './Header.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function Header() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <HeaderTag>
      <PageContainer>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </PageContainer>
    </HeaderTag>
  );
}

Header.propTypes = {
  themeSwitcher: PropTypes.func,
};
