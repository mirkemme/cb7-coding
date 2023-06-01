export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
    const wrapperEl = cE("div");
    const userImageEl = cE("img");
    const contentEl = cE("div");
    const userEls = cE("div");
    const nameEl = cE("p");
    const userNameEl = cE("p");
    const textContentEl = cE("p");
    const reactionsEl = cE("div");
    const likeValueEl = cE("div");
    const iconEl = cE("div");
    const imagePlaceholder = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    wrapperEl.className = "tweet";
    contentEl.className = "tweet__content";
    userEls.className = "tweet__content__user";
    nameEl.className = "user__name";
    userNameEl.className = "user__username";
    reactionsEl.className = "tweet__reactions";
    likeValueEl.className = "tweet__like__value";
    iconEl.className = "tweet__icon__heart";

    userImageEl.src = tweetData.user?.image || imagePlaceholder;
    userImageEl.alt = tweetData.user?.username;
    nameEl.textContent = `${tweetData.user?.firstName} ${tweetData.user?.lastName}`;
    userNameEl.textContent = `@${tweetData.user?.username}`;
    textContentEl.textContent = tweetData.body;
    likeValueEl.textContent = tweetData.reactions;

    userEls.append(nameEl, userNameEl);
    contentEl.append(userEls, textContentEl, reactionsEl);
    wrapperEl.append(userImageEl, contentEl);
    reactionsEl.append(iconEl, likeValueEl);

    return wrapperEl;
};