// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
// import FavouriteModal from "./components/ProductsList/FavouritesModal/FavouriteModal";

// const actions = {
//   toggleFilter: (): string => "none",
//   toggleFavouriteModal: (): boolean => false,
// };

// interface Props extends StateProps, DispatchProps {}

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-14">
        <Header />
      </div>
      <div className="w-full justify-center items-center h-5/6 bg-backblue">
        <ProductsList />
      </div>
    </div>
  );
}

// interface StateProps {
//   flag: boolean;
// }

// interface DispatchProps {
//   toggleFilter: typeof actions.toggleFilter;
//   toggleFavouriteModal: typeof actions.toggleFavouriteModal;
// }

// // To do: Right type in state and dispatch

// const mapStateToProps = (state: any): StateProps => ({
//   flag: state.toggleFavouriteModalReducer.flag,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   ...bindActionCreators(
//     {
//       ...actions,
//     },
//     dispatch
//   ),
// });

export default App;
