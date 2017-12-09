{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        provider,
        password,
        name,
        nickname,
        image,
        email,
        timestamps
      }
    }
  },
  games: {
    isFetching,
    error,
    [game_id]: {
      lastUpdated,
      info: {
        home_team,
        away_team,
        league,
        game_date,
        timestamps
      }
    }
  },
  sheets: {
    isFetching,
    error,
    [sheet_id]: {
      lastUpdated,
      info: {
        name,
        sheet_code,
        password,
        box_amount,
        home_team_score_row,
        away_team_score_row,
        closed,
        timestamps,
        user_id,
        game_id
      }
    }
  },
  boxes: {
    isFetching,
    error,
    [box_id]: {
      info: {
        home_team_num,
        away_team_num,
        home_team_id,
        away_team_id,
        number,
        timestamps,
        owner_id,
        sheet_id
      }
    }
  }
}