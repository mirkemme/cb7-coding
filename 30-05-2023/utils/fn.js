export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
    const wrapperEl = cE("div");
    const userImageEl = cE("img");
    const contentEl = cE("div");
    const userEls = cE("div");
    const nameEl = cE("p");
    const userNameEl = cE("p");
    const textContentEl = cE("p");
    const reactionsEl = cE("p");
    const imagePlaceholder = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    wrapperEl.className = "tweet";
    userImageEl.src = tweetData.user?.image || imagePlaceholder;
    userImageEl.alt = tweetData.user?.username;
    contentEl.className = "tweet__content";

    userEls.className = "tweet__content__user";
    nameEl.textContent = tweetData.user?.firstName;
    nameEl.className = "user__name";
    userNameEl.textContent = `@${tweetData.user?.username}`;
    userNameEl.className = "user__username";
    textContentEl.textContent = tweetData.body;
    reactionsEl.textContent = tweetData.reactions;

    userEls.append(nameEl, userNameEl);
    contentEl.append(userEls, textContentEl, reactionsEl);
    wrapperEl.append(userImageEl, contentEl);

    return wrapperEl;
};