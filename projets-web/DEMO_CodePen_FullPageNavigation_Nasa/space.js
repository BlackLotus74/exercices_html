window.addEventListener('DOMContentLoaded', function() {

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    const ESC_KEY_CODE = 'Escape';

    const NavigationMenu = props => {
        const {
            navOpen,
            navIsAnimating,
            closeNav
        } =
        props;
        const keyPressHandler = ({
            key
        }) => {
            if (key === ESC_KEY_CODE && navOpen) {
                closeNav();
            }
        };
        React.useEffect(() => {
            window.addEventListener('keydown', keyPressHandler);
            return () => {
                window.removeEventListener('keydown', keyPressHandler);
            };
        }, [navOpen]);
        const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;
        return (
            React.createElement("div", {
                    className: `navigation-menu${classes}`
                },
                React.createElement("div", {
                        className: "wrap"
                    },
                    React.createElement("div", {
                            className: "cols"
                        },
                        React.createElement("div", {
                                className: "col col-left col-links"
                            },
                            React.createElement("ul", {
                                    className: "links"
                                },
                                React.createElement("li", {
                                        className: "link"
                                    },
                                    React.createElement("a", {
                                        href: "https://en.wikipedia.org/wiki/David_Bowie",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Navigates to"
                                    }, "About Major Tom")),

                                React.createElement("li", {
                                        className: "link"
                                    },
                                    React.createElement("a", {
                                        href: "https://images.nasa.gov/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Navigates to"
                                    }, "Photos from a Tin Can")),

                                React.createElement("li", {
                                        className: "link"
                                    },
                                    React.createElement("a", {
                                        href: "https://www.nasa.gov/audience/foreducators/stem-on-station/ditl_eating",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Navigates to"
                                    }, "Shop for Protein Pills")),


                                React.createElement("li", {
                                        className: "link"
                                    },
                                    React.createElement("a", {
                                        href: "https://en.wikipedia.org/wiki/Mission_control_center",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Navigates to"
                                    }, "Contact Ground Control")))),


                        React.createElement("div", {
                                className: "col col-right col-image"
                            },
                            React.createElement("img", {
                                className: "astro",
                                src: "https://i.imgur.com/0pWqp5j.png"
                            }))))));

    };

    const Header = props => {
        const {
            navOpen,
            navIsAnimating,
            toggleNavHandler
        } =
        props;
        return (
            React.createElement("header", {
                    className: "header"
                },

                React.createElement("div", {
                        className: "wrap"
                    },
                    React.createElement("button", {
                            className: `nav-button${navIsAnimating ? ' is-animating' : ''}`,
                            type: "button",
                            "aria-label": "Toggle Navigation",
                            onClick: event => toggleNavHandler(event)
                        },

                        React.createElement("span", {
                            className: `label--nav-closed${!navOpen ? ' active' : ''}`
                        }, "menu"),
                        React.createElement("span", {
                            className: `label--nav-open${navOpen ? ' active' : ''}`
                        }, "close")))));

    };

    class App extends React.Component {
        constructor(...args) {
            super(...args);
            _defineProperty(this, "state", {
                navOpen: false,
                navIsAnimating: false
            });
            _defineProperty(this, "toggleNav",


                event => {
                    event.preventDefault();
                    const {
                        navOpen
                    } = this.state;
                    if (event) event.preventDefault();
                    this.setState({
                        navIsAnimating: true
                    });

                    if (navOpen) document.body.classList.remove('nav-open');
                    if (!navOpen) document.body.classList.add('nav-open');
                    setTimeout(() => {
                        this.setState({
                            navIsAnimating: false,
                            navOpen: !navOpen
                        });

                    }, 500);
                });
            _defineProperty(this, "openNav",

                event => {
                    if (event) event.preventDefault();
                    document.body.classList.add('nav-open');
                    this.setState({
                        navOpen: true
                    });

                });
            _defineProperty(this, "closeNav",

                () => {
                    document.body.classList.remove('nav-open');
                    this.setState({
                        navOpen: false
                    });

                });
        }

        render() {
            const {
                navOpen,
                navIsAnimating
            } =
            this.state;
            return (
                React.createElement("div", {
                        className: "layout"
                    },
                    React.createElement(Header, {
                        navOpen: navOpen,
                        toggleNavHandler: event => this.toggleNav(event),
                        navIsAnimating: navIsAnimating
                    }),

                    React.createElement(NavigationMenu, {
                        navOpen: navOpen,
                        navIsAnimating: navIsAnimating,
                        closeNav: event => this.closeNav(event),
                        toggleNavHandler: event => this.toggleNav(event)
                    }),

                    React.createElement("main", {
                            className: "page"
                        },
                        React.createElement("div", {
                                className: "wrap"
                            },
                            React.createElement("div", {
                                    className: "title-section text-wrapper"
                                },
                                React.createElement("h1", null, "Is There Life on Mars?"),
                                React.createElement("span", {
                                    className: "author"
                                }, "By David Robert Jones"))),


                        React.createElement("img", {
                            className: "some-image",
                            src: "https://images.unsplash.com/photo-1573588028698-f4759befb09a"
                        }),
                        React.createElement("div", {
                                className: "wrap"
                            },
                            React.createElement("div", {
                                    className: "text-body text-wrapper"
                                },
                                React.createElement("p", null, "It's a god-awful small affair, to the girl with the mousy hair. But her mummy is yelling, \"No!\", and her daddy has told her to go. But her friend is nowhere to be seen, now she walks through her sunken dream, to the seat with the clearest view. And she's hooked to the silver screen"),
                                React.createElement("p", null, React.createElement("br", null), "But the film is a saddening bore, for she's lived it ten times or more. She could spit in the eyes of fools, as they ask her to focus on sailors fighting in the dance hall; Oh man! Look at those cavemen go; It's the freakiest show. Take a look at the lawman beating up the wrong guy, oh man! Wonder if he'll ever know, he's in the best selling show. Is there life on Mars?"),
                                React.createElement("p", null, React.createElement("br", null), "It's on America's tortured brow, that Mickey Mouse has grown up a cow. Now the workers have struck for fame, because Lennon's on sale again. See the mice in their million hordes, from Ibiza to the Norfolk Broads. Rule Britannia is out of bounds to my mother, my dog, and clowns."),
                                React.createElement("p", null, React.createElement("br", null), "But the film is a saddening bore, for she's lived it ten times or more. She could spit in the eyes of fools, as they ask her to focus on sailors fighting in the dance hall; Oh man! Look at those cavemen go; It's the freakiest show. Take a look at the lawman beating up the wrong guy, oh man! Wonder if he'll ever know, he's in the best selling show. Is there life on Mars?"))))));
        }
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
});